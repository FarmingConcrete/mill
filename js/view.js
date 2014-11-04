var dataSet = [];

var currentDate = moment('2014-01-01'),
    crops = ['corn', 'peppers (hot)', 'tomatoes'];

_.each(_.range(_.random(75)), function () {
    currentDate = currentDate.add(_.random(3), 'days');
    dataSet.push([
        currentDate.format('M/D/YY'),
        _.random(5),
        _.sample(crops)
    ]);
});

$(document).ready(function () {
    $('.metric-table').dataTable({
        columns: [
            { "title": "Recorded" },
            { "title": "Plants" },
            { "title": "Crop" }
        ],
        data: dataSet,
        lengthChange: false,
        pageLength: 5,
        searching: false
    });
});
