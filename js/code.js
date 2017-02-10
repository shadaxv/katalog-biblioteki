$(document).ready(function() {
	var NavY = $('.menu-div').offset().top;

	var stickyNav = function(){
	var ScrollY = $(window).scrollTop();

	if (ScrollY > NavY) {
		$('.menu-div').addClass('sticky');
		$('.spacer').addClass('spacer-show');
	} else {
		$('.menu-div').removeClass('sticky');
		$('.spacer').removeClass('spacer-show');
	}
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});
	});
