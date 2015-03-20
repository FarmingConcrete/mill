var _ = require('underscore');
var qs = require('qs');
var Spinner = require('spin.js');
require('../bower_components/pickadate/lib/picker');
require('../bower_components/pickadate/lib/picker.date');

var initViewPage = require('./view').init;

var barnUrl = CONFIG.barnUrl,
    availableFiltersEndpoint = '/api/filters/available/',
    overviewEndpoint = '/api/overview/';

var boroughs = [
    'Bronx',
    'Brooklyn',
    'Manhattan',
    'Queens',
    'Staten Island'
];

var states;

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

function loadAvailableFilters() {
    return $.getJSON(barnUrl + availableFiltersEndpoint, function (data) {
        // Handle states
        states = data.states;
        _.each(_.keys(states), function (state) {
            $(':input[name=state]').append($('<option></option>').text(state));
        });

        // Handle groups
        _.each(data.groups, function (group) {
            $(':input[name=group]').append($('<option></option>').text(group));
        });

        // Handle garden types
        _.each(data.garden_types, function (group) {
            $(':input[name=garden_type]').append($('<option></option>').text(group));
        });

        // Handle metrics
        _.each(_.keys(data.metrics), function (metricGroup) {
            var $group = $('<optgroup></optgroup>').attr('label', metricGroup);
            _.each(data.metrics[metricGroup], function (metric) {
                $group.append($('<option></option>').text(metric));
            });
            $(':input[name=metric]').append($group);
        });
    });
}

function loadOverview() {
    return $.getJSON(barnUrl + overviewEndpoint, function (data) {
        $('.overview-gardens').text(data.gardens.toLocaleString());
        $('.overview-harvest-pounds').text(data.pounds_of_food.toLocaleString());
        $('.overview-compost-pounds').text(data.pounds_of_compost.toLocaleString());
        $('.overview-list').slideDown();
    });
}

function initIndexPage() {
    var overviewSpinner = new Spinner({}).spin($('.overview h2')[0]),
        filtersSpinner = new Spinner({}).spin($('.filters h2')[0]);

    loadAvailableFilters()
        .done(function () {
            var $city = $(':input[name=city]'),
                $zip = $(':input[name=zip]');

            $(':input[type=date]').pickadate({
                format: 'm/d/yy',
                max: new Date(),
                min: new Date(2010, 0, 1)
            });

            $('select').select2();

            $(':input[name=state]').change(function () {
                $city.select2('val', null)
                    .find('option:gt(0)').remove();
                $zip.select2('val', null)
                    .find('option:gt(0)').remove();

                var state = $(this).val();

                if (state !== '') {
                    // Update cities when state changes
                    if (state === 'NY') {
                        // Add NYC group w/ boroughs
                        var $boroughs = $('<optgroup></optgroup>').attr('label', 'New York City');
                        $boroughs.append($('<option></option>').text('All boroughs'));
                        _.each(boroughs, function (borough) {
                            $boroughs.append($('<option></option>').text(borough));
                        });
                        $city.append($boroughs);
                    }

                    var cities = states[state].cities;
                    if (state === 'NY') {
                        // Don't add boroughs again here
                        cities = _.difference(cities, boroughs);
                    }
                    _.each(cities, function (city) {
                        $city.append($('<option></option>').text(city));
                    });

                    // Update zips when state changes
                    _.each(states[state].zips, function (zip) {
                        $zip.append($('<option></option>').text(zip));
                    });
                }

                $city.prop('disabled', $(this).val() === '');
                $zip.prop('disabled', $(this).val() === '');
            });

            setFilters(window.location.search.slice(1));
            filtersSpinner.stop();
            $('.filters-form').slideDown();
        });

    loadOverview()
        .done(function () {
            overviewSpinner.stop();
        });

    $('.btn-submit').click(function () {
        var url = $(this).attr('href') + '?' + getViewQueryString();
        $('.btn-submit').attr('href', url);
    });
}

$(document).ready(function () {
    if ($('.main-index-page').length > 0) {
        initIndexPage();
    }
    if ($('.view-page').length > 0) {
        initViewPage();
    }
});
