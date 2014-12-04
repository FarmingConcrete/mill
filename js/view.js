var _ = require('underscore'),
    moment = require('../bower_components/moment/min/moment.min'),
    Handlebars = require('handlebars'),
    qs = require('qs');

var templates = require('../templates/dynamic/compiled')(Handlebars);
require('./handlebars.helpers');
var filtersTemplate = templates['view-filters.hbs'];
var tabsTemplate = templates['view-tabs.hbs'];

require('../bower_components/bootstrap/js/tab');
require('../bower_components/datatables/media/js/jquery.dataTables.min');


function makeTable($table, data) {
    // Infer columns
    var columns = _.chain(_.keys(data.records[0]))
        .map(function (column) {
            return {
                data: column,
                title: column.replace(/_/g, ' ')
            };
        })
        .sortBy(function (column) {
            return column.title;
        })
        .value();

    // Create table
    $table.dataTable({
        columns: columns,
        data: data.records,
        lengthChange: false,
        pageLength: 5,
        searching: false
    });
}

function makeChart($chart, data, availableWidth, availableHeight, numericFieldName) {
    // Infer 'total' field, for y axis
    if (!numericFieldName) {
        numericFieldName = _.filter(_.keys(data[0]), function (k) {
            return _.isNumber(data[0][k]);
        })[0];
    }

    // Set our margins
    var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 30
    },
    width = availableWidth - margin.left - margin.right,
    height = availableHeight - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);
    var y = d3.scale.linear().rangeRound([height, 0]);
    var color = d3.scale.ordinal().range(["#308fef", "#5fa9f3", "#1176db"]);

    // Use our X scale to set a bottom axis
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    // Same for our left axis
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(d3.format(".2s"));

    var svg = d3.select($chart[0]).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    color.domain(d3.keys(data[0]));

    data.forEach(function (d) {
        var y0 = 0;
        d.types = color.domain().map(function (name) {
            return {
                name: name,
                y0: y0,
                y1: y0 += +d[numericFieldName]
            };
        });
        d[numericFieldName] = d.types[d.types.length - 1].y1;
    });

    // Our X domain is our set of dates
    x.domain(data.map(function (d) {
        return d.recorded;
    }));

    // Our Y domain is from zero to our highest total
    y.domain([0, d3.max(data, function (d) {
        return d[numericFieldName];
    })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    var date = svg.selectAll(".date")
        .data(data)
        .enter().append("g")
        .attr("class", "g")
        .attr("transform", function (d) {
            return "translate(" + x(d.recorded) + ",0)";
        });

    date.selectAll("rect")
        .data(function (d) {
            return d.types;
        })
        .enter().append("rect")
            .attr("width", x.rangeBand())
            .attr("y", function (d) {
                return y(d.y1);
            })
            .attr("height", function (d) {
                return y(d.y0) - y(d.y1);
            })
            .style("fill", function (d) {
                return '#6b812d';
            });
}

function loadData() {
    var barnBase = 'http://localhost:8000',
        endpoint = '/api/records/',
        url = barnBase + endpoint + window.location.search;
    return $.getJSON(url);
}

function setFilters(query) {
    $('.filters-list').append(filtersTemplate(qs.parse(query)));
}

function setEditFiltersLink(query) {
    var url = $('.btn-edit-filters').attr('href') + query;
    $('.btn-edit-filters').attr('href', url);
}

function slugifyMetricName(name) {
    return name.replace(/ /g, '-').toLowerCase();
}

function makeTabs($location, data) {
    // Create tabs for each metric
    var slugMetrics = _.map(data.results.metrics, function (metric) {
        return {
            slug: slugifyMetricName(metric.name),
            name: metric.name
        };
    });
    $location.append(tabsTemplate({ metrics: slugMetrics }));
    $location.find('.nav-tabs a:first').tab('show');
}

function findAvailableDataSummaryHeight() {
    return $('.summary').height() - $('.summary-header').outerHeight() - 
        $('.summary-actions').outerHeight() - $('.nav-tabs').outerHeight();
}

function populateTabs(results) {
    var chartWidth = $('.chart:eq(0)').width(),
        chartHeight = findAvailableDataSummaryHeight();
    _.each(results.metrics, function (metric) {
        var $tab = $('#' + slugifyMetricName(metric.name));
        makeTable($tab.find('.metric-table'), metric);
        makeChart($tab.find('.chart'), metric.records, chartWidth, chartHeight);
    });
}

module.exports = {
    init: function () {
        setFilters(window.location.search.slice(1));
        setEditFiltersLink(window.location.search);
        
        loadData().done(function (data) {
            makeTabs($('.data-summary'), data);
            populateTabs(data.results);
        });

        // Handle events
        $('.btn-download').click(function () {
            alert('Not implemented yet! Will be an Excel file with all the data.');
        });

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
