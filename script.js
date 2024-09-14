
$(document).ready(function() {

    $("a[href^='#']").on('click', function(event) {
    
        event.preventDefault();

 
        var target = this.hash;

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });


    $('.stat-box').hover(function() {
        $(this).addClass('animated bounceIn');
    }, function() {
        $(this).removeClass('animated bounceIn');
    });
});

