$(document).ready(function() {
    $('#scrollToContent').click(function() {
        $('html, body').animate({
            scrollTop: $('#content-section').offset().top
        }, 1000); 
    });
});