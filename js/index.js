var $ = require('jquery');
require('../bower_components/pickadate/lib/picker');
require('../bower_components/pickadate/lib/picker.date');
require('../bower_components/select2/select2.min');

var initViewPage = require('./view').init;

function initIndexPage() {
    $(':input[type=date]').pickadate({
        format: 'm/d/yy'
    });

    $('select').select2();

    $(':input[name=state]').change(function () {
        $(':input[name=city],:input[name=zip]').prop('disabled', $(this).val() === '');
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
