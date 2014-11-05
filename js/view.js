function createFakeDataset() {
    var dataSet = [],
        currentDate = moment('2014-01-01'),
        crops = ['corn', 'peppers (hot)', 'tomatoes'];

    _.each(_.range(_.random(75)), function () {
        currentDate = currentDate.add(_.random(3), 'days');
        dataSet.push([
            currentDate.format('M/D/YY'),
            _.random(5),
            _.sample(crops)
        ]);
    });
    return dataSet;
}

function asObjects(data) {
    return _.map(data, function (d) {
        return {
            date: d[0],
            total: d[1],
            crop: d[2]
        };
    });
}

function makeChart($chart, data) {
    data = data.slice(0, 10);

    // Set our margins
    var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 60
    },
    width = 500 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

    // Our X scale
    var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);

    // Our Y scale
    var y = d3.scale.linear().rangeRound([height, 0]);

    // Our color bands
    var color = d3.scale.ordinal()
        .range(["#308fef", "#5fa9f3", "#1176db"]);

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

    color.domain(d3.keys(data[0]).filter(function (key) {
        return key !== "year";
    }));

    data.forEach(function (d) {
        var y0 = 0;
        d.types = color.domain().map(function (name) {
            return {
                name: name,
                y0: y0,
                y1: y0 += +d.total
            };
        });
        d.total = d.types[d.types.length - 1].y1;
    });

    // Our X domain is our set of dates
    x.domain(data.map(function (d) {
        return d.date;
    }));

    // Our Y domain is from zero to our highest total
    y.domain([0, d3.max(data, function (d) {
        return d.total;
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
            return "translate(" + x(d.date) + ",0)";
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

$(document).ready(function () {
    $('.metric-table').each(function () {
        var columns = [
            { "title": "Recorded" },
            { "title": $(this).data('number-label') }
        ];
        if ($(this).data('crops')) {
            columns.push({ "title": "Crop" });
        }
        var data = createFakeDataset();
        $(this).dataTable({
            columns: columns,
            data: data,
            lengthChange: false,
            pageLength: 5,
            searching: false
        });

        var $chart = $(this).parentsUntil('.tab-pane').find('.chart');
        makeChart($chart, asObjects(data));
    });

    $('.btn-download').click(function () {
        alert('Not implemented yet! Will be an Excel file with all the data.');
    });

    $('.btn-hide').click(function () {
        alert('Not implemented yet! Will hide filters to emphasize data more.');
    });
});
