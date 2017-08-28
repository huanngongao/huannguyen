

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// nav fixed top
$(document).ready(function(){
    // $('#wrap_banner_head').affix({offset: {top: 200} });
    
  //   if($('#wrap_banner_head').hasClass('affix')) {
  //   	$("#wrap_banner_head").animate({
		//     height: 'toggle'
		// });
  //   }
		
});
// end
// carousel-mid



// end
// owl-carousel
$(document).ready(function() {
	var owl = $('.owl-carousel3');
	owl.owlCarousel({
	margin: 20,
	navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	nav: true,
	loop: true,
	responsive: {
	0: {
		items: 2
	},
	768: {
		items: 3
	},
	1200: {
		items: 4
		}
	}
	});
});
// end
// Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
// end
// Scroll top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
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
 //    $(document).ready(function(){
	//     $("button").click(function(){
	//         $("div").animate({
	//             height: 'toggle'
	//         });
	//     });
	// });

});
// end
function mouseOver() {
    document.getElementById("img_show").style.display = 'none';
    // ocument.getElementById("img_show").style.transition = '3s';
    document.getElementById("img_hide").style.display = 'block';
}

function mouseOut() {
     document.getElementById("img_show").style.display = 'block';
    document.getElementById("img_hide").style.display = 'none';
}
$('.carousel').carousel({
    interval: 2000
})