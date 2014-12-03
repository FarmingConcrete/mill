var _ = require('../bower_components/underscore/underscore-min');
var Handlebars = require('../bower_components/handlebars/handlebars.runtime');

Handlebars.registerHelper('filterWhere', function (city, state, zip) {
    return _.compact([city, state, zip]).join(', ') || 'Everywhere';
});

Handlebars.registerHelper('filterMetrics', function (metrics) {
    if (!metrics) return 'All metrics';
    if (!_.isArray(metrics)) return metrics;
    return metrics.join(', ');
});

Handlebars.registerHelper('filterWhen', function (start, end) {
    if (start && end) return [start, end].join(' to ');
    if (start) return 'After ' + start;
    if (end) return 'Before ' + end;
    return 'All dates';
});

Handlebars.registerHelper('filterGroups', function (groups) {
    if (!groups) return 'None selected';
    if (!_.isArray(groups)) return groups;
    return groups.join(', ');
});

Handlebars.registerHelper('filterTypes', function (types) {
    if (!types) return 'All types';
    if (!_.isArray(types)) return types;
    return types.join(', ');
});
