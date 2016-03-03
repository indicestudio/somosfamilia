	'use strict';

$(document).ready(function(){
	//Opacity scroll
	var target = $('#main-title, .roll-over');
	var targetHeight = target.outerHeight();

	$(document).scroll(function(){
		var scrollPercent = (targetHeight - (window.scrollY - 100)) / targetHeight;
		if(scrollPercent >= 0){
			target.css('opacity', scrollPercent);
		}
	});

	//Fixed top NavBar
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 20) {
			$('#main-nav').addClass('menu-fixed');
			$('#logo-fixed').removeClass('hidden');
			$('#logo').addClass('hidden');

		} else {
			$('#main-nav').removeClass('menu-fixed');
			$('#logo-fixed').addClass('hidden');
			$('#logo').removeClass('hidden');
		}
	});

	//Show Text
	var center = $('.center-vertical');
	$('.more-text').hide();
	$('.more-arrow').click(function(){
		$('.more-text').slideToggle('400');
		$(this).toggleClass('rotate');
		center.toggleClass('center-vertical', 400);
	});

	//Scroll navigation
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var targetSc = this.hash;
		var $targetSc = $(targetSc);

		$('html, body').stop().animate({
			'scrollTop': $targetSc.offset().top
		}, 500, 'swing');
	});

	//Gallery
	$('div#makeMeScrollable').smoothDivScroll({
        touchScrolling: true,
        hotSpotScrolling: false
    });

});


