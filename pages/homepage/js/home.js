// Abilito i tooltip ovunque
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
// scroll body to 0px on click
$('#backtop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});
