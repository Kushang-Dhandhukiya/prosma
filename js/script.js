
$(document).ready(function(){
    setTimeout(function(){
        $('.preloader').fadeOut();
    },3000);
});


$(document).ready(function(){

    $('#team').owlCarousel({
        loop:false,
        startPosition:4,
        items:4,
        nav:false,
        dots:true,
    })

    $('#testimonial').owlCarousel({
        loop:false,
        items:1,
        nav:false,
        dots:true,
    })

        var btn = $('.to_top');
        btn.hide(); 
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                btn.fadeIn();
            } else {
                btn.fadeOut();
            }
        });

        btn.on('click', function(e) {
        e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });

    });

// AOS.init();

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        items:2,
        dots:false,
        // touchDrag:false,
        navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
    })

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
    
        if (scroll >= 50) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

   


    });

    $('.main_menu li > a').click(function(){
        $('.main_menu li a').removeClass('active');
        $(this).addClass('active')
    });