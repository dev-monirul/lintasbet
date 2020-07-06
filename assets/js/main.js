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
			autoplay:true
		});





	});


	jQuery(window).load(function () {


	});


}(jQuery));
