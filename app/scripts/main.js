$(document).ready(function(){
	//Opacity scroll
	var target = $('#main-title');
	var targetHeight = target.outerHeight();

	$(document).scroll(function(e){
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

	//Parallax
	$('#main-nav').localScroll(800);
	$('#header-bkg').parallax("50%", 0.4);
	$('#main-title').parallax("50%", 0.2);
	$('#sabores').parallax("50%", 0.25);

	//Show Text
	$('.more-text').hide();
	$('.more-arrow').click(function(){
		$('.more-text').slideToggle("slow");
		$(this).toggleClass("rotate");
	});
});
