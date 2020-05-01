$(document).ready(function() {
    $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function() {
        $('.overlay').fadeIn(500);
        $('.modal').slideDown(1000);
    });
    $('.close').on('click', function() {
        $('.overlay').fadeOut(1500);
        $('.modal').slideUp(1000);
    });
});