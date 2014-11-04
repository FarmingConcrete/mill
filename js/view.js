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

$(document).ready(function () {
    $('.metric-table').each(function () {
        var columns = [
            { "title": "Recorded" },
            { "title": $(this).data('number-label') }
        ];
        if ($(this).data('crops')) {
            columns.push({ "title": "Crop" });
        }
        $(this).dataTable({
            columns: columns,
            data: createFakeDataset(),
            lengthChange: false,
            pageLength: 5,
            searching: false
        });
    });
});
