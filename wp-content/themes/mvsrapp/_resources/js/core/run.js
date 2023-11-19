// binds $ to jquery, requires you to write strict code. Will fail validation if it doesn't match requirements.
(function($) {
    "use strict";

	// add all of your code within here, not above or below
	$(function() {

		$('.menu-trigger').click(function() {
			$('.full-menu').addClass('active');
			$('.menu-underlay').addClass('active');
		});

		$('.close-menu, .menu-underlay').click(function() {
			$('.full-menu').removeClass('active');
			$('.menu-underlay').removeClass('active');
		});


	});

}(jQuery));
