// $(document).ready(function() {
//     if ($("#item").hasClass('active')) {
//         $(".slider_title").addClass('move_left');

//     }else {
//         $(".slider_title").removeClass('move_left');
//     }
// });
$('.owl-carousel-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('.owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
    $('.owl-carousel-3').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top_space').hide();
            // $('.top_space').hide();
        } else {
            $('.top_space').show();
        }
    });
}); 

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollup').fadeIn();
            $('.scrollup').addClass('move_top');
         //     $(".fixed").animate({
            //     height: 'toggle'
            // });
        } else {
            $('.scrollup').fadeOut();
             $('.scrollup').removeClass('move_top');
            // $(".scrollup").stop();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});