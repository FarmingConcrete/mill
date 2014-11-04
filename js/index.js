$(document).ready(function () {
    $(':input[type=date]').pickadate({
        format: 'm/d/yy'
    });

    $('select').select2();

    $(':input[name=state]').change(function () {
        $(':input[name=city],:input[name=zip]').prop('disabled', $(this).val() === '');
    });
});
