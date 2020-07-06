(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		$(".hero-slide").owlCarousel({
			items:1,
			loop:true,
			nav:true,
			navText: ["<img src='assets/img/arrow-left.png'>", "<img src='assets/img/arrow-right.png'>"],
			dots:true,
			autoplay:true,
			autoplayTimeout: 3000,
            smartSpeed: 1000,
		});

		$(".permainan-slide").owlCarousel({
			items:4,
			loop:true,
			nav:true,
			navText: ["<img src='assets/img/arrow-left.png'>", "<img src='assets/img/arrow-right.png'>"],
			dots:false,
			autoplay:true,
			responsive: {
                0: {
                    items: 2,
                },
                767: {
                    
                }
            }
		});

		jQuery('nav').meanmenu({
			meanMenuContainer: '.mobile-menu-container',
			meanScreenWidth: "993"
		});

		$(".scroll-top").click(function () {
			$("html,body").animate({
				scrollTop: 0
			}, 1000);
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() > 180) {
				$(".scroll-top").fadeIn();
			} else {
				$(".scroll-top").fadeOut();
			}
		});





	});


	jQuery(window).load(function () {


	});


}(jQuery));
