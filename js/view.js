var _ = require('underscore'),
    slugify = require('slugify'),
    moment = require('../bower_components/moment/min/moment.min'),
    Handlebars = require('handlebars'),
    Spinner = require('spin.js'),
    qs = require('qs');

var templates = require('../templates/dynamic/compiled')(Handlebars);
require('./handlebars.helpers');
var filtersTemplate = templates['view-filters.hbs'];
var emptyMetricsTemplate = templates['view-empty-metrics.hbs'],
    tabsTemplate = templates['view-tabs.hbs'];

require('../bower_components/bootstrap/js/tab');
require('../bower_components/bootstrap/js/tooltip');
require('../bower_components/datatables/media/js/jquery.dataTables.min');

var barnUrl = CONFIG.barnUrl,
    previewEndpoint = '/api/records/',
    downloadEndpoint = '/api/export/';


function makeTable($table, data) {
    // Infer columns
    var columns = _.chain(_.keys(data.records[0]))
        .map(function (column) {
            var title = data.headers[column] ? data.headers[column] : column.replace(/_/g, ' ');
            return {
                data: column,
                title: title
            };
        })
        .sortBy(function (column) {
            return column.title;
        })
        .value();

    // Is there a garden column? If so, move it to the end
    var gardenIndex = _.chain(columns)
        .pluck('title')
        .indexOf('garden')
        .value();
    if (gardenIndex >= 0) {
        var gardenColumn = columns[gardenIndex];
        columns.splice(gardenIndex, 1);
        gardenColumn.className = 'column-garden';
        columns.push(gardenColumn);

        $table.on('mouseover', 'th.column-garden', function () {
            $(this)
                .tooltip({
                    placement: 'bottom',
                    title: 'Garden names and precise locations have been ' +
                           'anonymized. Garden IDs will be consistent ' +
                           'within your downloaded file.'
                })
                .tooltip('show');
        });
    }

    // Create table
    $table.dataTable({
        columns: columns,
        data: data.records,
        lengthChange: false,
        pageLength: 5,
        searching: false
    });
}

function findNumericFieldName(data) {
    // Infer 'total' field, for y axis
    return _.find(_.keys(data[0]), function (k) {
        // Look at first ten rows to try to find a numeric cell
        return _.find(data.slice(0, 10), function (row) {
            return _.isNumber(row[k]);
        });
    });
}

function makeChart($chart, data, headers, availableWidth, availableHeight, numericFieldName) {
    if (!numericFieldName) {
        numericFieldName = findNumericFieldName(data);
    }

    // Set our margins
    var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
    },
    width = availableWidth - margin.left - margin.right,
    height = availableHeight - margin.top - margin.bottom;

    var dateFormat = d3.time.format("%Y-%m-%d");

    var x = d3.time.scale()
        .domain(d3.extent(data, function (d) {
            return dateFormat.parse(d.recorded).getTime(); 
        }))
        .nice(d3.time.year)
        .rangeRound([0, width]);
    var y = d3.scale.linear().rangeRound([height, 0]);

    var histogram = d3.layout.histogram()
        .bins(x.ticks(10))
        .value(function (d) {
            return dateFormat.parse(d.recorded).getTime(); 
        })
        (data); 

    // Use our X scale to set a bottom axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .ticks(d3.time.year)
        .orient("bottom");

    // Same for our left axis
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format("s"));

    var svg = d3.select($chart[0]).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var histogramData = [];
    histogram.forEach(function (d) {
        var y0 = 0;
        histogramData.push({
            name: name,
            date: d3.min(d, function (d) {
                return dateFormat.parse(d.recorded).getTime(); 
            }),
            gardens: d3.set(d.map(function (record) { return record.garden; })).size(),
            y0: y0,
            y1: y0 += d3.sum(d, function (d) { return +d[numericFieldName]; })
        });
    });

    y.domain([0, d3.max(histogramData, function (d) { return d.y1; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    var barWidth = (width / histogram.length) * 0.4;
    var date = svg.selectAll(".date")
        .data(histogramData)
        .enter().append("g")
        .attr("class", "g bar")
        .attr("transform", function (d) {
            if (d.date) {
                return "translate(" + (x(d.date) - (barWidth / 2.0)) + ",0)";
            }
        });

    date.append("rect")
        .attr("width", barWidth)
        .attr("y", function (d) {
            return y(d.y1);
        })
        .attr("height", function (d) {
            return y(d.y0) - y(d.y1);
        });


    var tooltip = d3.select('body')
        .append('div')
        .attr('class', 'chart-tooltip');

    date.on('mouseover', function (d) {
        var chartOffset = $('.chart:visible').offset(),
            barX = chartOffset.left + x(d.date) - barWidth;
        d3.select(this).classed('selected', true);
        tooltip
            .text('gardens recording data: ' + d.gardens)
            .style('display', 'block')
            .style('top', function () {
                var $tooltip = $('.chart-tooltip'),
                    barY = chartOffset.top + margin.top + y(d.y1) - $tooltip.outerHeight() - 15;
                return barY + 'px';
            })
            .style('left', barX + 'px');
    });

    date.on('mouseout', function () {
        d3.select(this).classed('selected', false);
        tooltip.style('display', 'none');
    });

    date.append('text')
        .text(function(d) { return d3.format('.2s')(d.y1); })
        .attr('y', function(d) { return y(d.y1) + 10; })
        .attr('x', 5)
        .style('stroke', '#FFF')
        .style('font-size', '10px');

    var yLabel = numericFieldName ? numericFieldName : 'total';
    if (_.contains(_.keys(headers), yLabel)) {
        yLabel = headers[yLabel];
    }
    else {
        yLabel = yLabel.replace(/_/g, ' ');
    }
    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "middle")
        .attr("y", -(margin.left - 10))
        .attr("x", -(height / 2))
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text(yLabel);

    $chart.next().find('.metric-tab-chart-title-quantity').text(yLabel);
}

function loadData() {
    return $.getJSON(barnUrl + previewEndpoint + window.location.search);
}

function setFilters(query) {
    $('.filters-list').append(filtersTemplate(qs.parse(query)));
}

function setEditFiltersLink(query) {
    var url = $('.btn-edit-filters').attr('href') + query;
    $('.btn-edit-filters').attr('href', url);
}

function slugifyMetricName(name) {
    return slugify(name.toLowerCase()).replace(/[^a-z0-9-]/g, '-');
}

function showEmptyMetrics($location, data) {
    var metricsWithoutRecords = _.filter(data.results.metrics, function (metric) {
        return metric.records.length === 0;
    });
    if (metricsWithoutRecords.length > 0) {
        $location.append(emptyMetricsTemplate({ metrics: metricsWithoutRecords }));
    }
}

function makeTabs($location, data) {
    var metricsWithRecords = _.filter(data.results.metrics, function (metric) {
        return metric.records.length > 0;
    });

    // Create tabs for each metric
    var slugMetrics = _.map(metricsWithRecords, function (metric) {
        return {
            group_number: metric.group_number,
            slug: slugifyMetricName(metric.name),
            name: metric.name,
            number: metric.number
        };
    });
    $location.append(tabsTemplate({ metrics: slugMetrics }));
    $location.find('.nav-tabs a:first').tab('show');
}

function findAvailableDataSummaryHeight() {
    var height = $('.summary').height() - $('.summary-header').outerHeight() - 
        $('.summary-actions').outerHeight() - $('.nav-tabs').outerHeight();
    return height < 250 ? 250 : height;
}

function populateTabs(results) {
    var chartWidth = $('.chart:eq(0)').width(),
        chartHeight = findAvailableDataSummaryHeight();
    _.each(results.metrics, function (metric) {
        var $tab = $('#' + slugifyMetricName(metric.name));
        makeTable($tab.find('.metric-table'), metric);
        makeChart($tab.find('.chart'), metric.records, metric.headers, chartWidth, chartHeight);
    });
}

module.exports = {
    init: function () {
        var spinner = new Spinner({}).spin($('.data-summary')[0]);

        setFilters(window.location.search.slice(1));
        setEditFiltersLink(window.location.search);

        loadData().done(function (data) {
            spinner.stop();

            if (data.results.metrics.length > 0) {
                showEmptyMetrics($('.data-summary'), data);
                makeTabs($('.data-summary'), data);
                populateTabs(data.results);
                $('.summary-actions').show();
            }
            else {
                // Nothing found, let user know
                $('.summary-no-data').show();
            }
        });

        $('.btn-download')
            .attr('href', barnUrl + downloadEndpoint + window.location.search)
            .click(function () {
                $('.summary-actions-download-start').show();
                $(this).addClass('disabled');
                return true;
            });

        // Handle events
        $('.btn-hide').click(function () {
            $('.filters-container').addClass('hidden');
            $('.btn-show').removeClass('hidden');
        });

        $('.btn-show').click(function () {
            $('.filters-container').removeClass('hidden');
            $('.btn-show').addClass('hidden');
        });
    }
};
