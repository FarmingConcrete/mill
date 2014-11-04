$(document).ready(function () {
    $(':input[type=date]').pickadate({
        format: 'm/d/yy'
    });

    $('select').select2();
});
