var $ = require('jquery');
var qs = require('qs');
require('../bower_components/pickadate/lib/picker');
require('../bower_components/pickadate/lib/picker.date');
require('../bower_components/select2/select2.min');

var initViewPage = require('./view').init;

function getViewFilters() {
    var filters = {};
    $('.filters-form :input[name]').each(function () {
        if ($(this).val() !== '') {
            filters[$(this).attr('name')] = $(this).val();  
        }
    });
    return filters;
}

function getViewQueryString() {
    return $.param(getViewFilters()).replace(/(?:%5B|%5D)/g, '');
}

function setFilters(query) {
    var parsed = qs.parse(query);

    // Metrics
    $(':input[name=metric]').select2('val', parsed.metric);

    // Where
    $(':input[name=state]').select2('val', parsed.state).trigger('change');
    $(':input[name=city]').select2('val', parsed.city);
    $(':input[name=zip]').select2('val', parsed.zip);

    // When
    $(':input[name=start]').val(parsed.start);
    $(':input[name=end]').val(parsed.end);

    // Group
    $(':input[name=group]').select2('val', parsed.group);

    // Garden type
    $(':input[name=garden_type]').select2('val', parsed.garden_type);
}

function initIndexPage() {
    $(':input[type=date]').pickadate({
        format: 'm/d/yy'
    });

    $('select').select2();

    $(':input[name=state]').change(function () {
        $(':input[name=city],:input[name=zip]').prop('disabled', $(this).val() === '');
    });

    $('.btn-submit').click(function () {
        var url = $(this).attr('href') + '?' + getViewQueryString();
        $('.btn-submit').attr('href', url);
    });

    setFilters(window.location.search.slice(1));
}

$(document).ready(function () {
    if ($('.main-index-page').length > 0) {
        initIndexPage();
    }
    if ($('.view-page').length > 0) {
        initViewPage();
    }
});
