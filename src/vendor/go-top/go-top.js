(function ($) {
	// eslint-disable-next-line func-names
	jQuery.fn.scrollToTop = function () {
		$(this).hide().removeAttr('href');
		// eslint-disable-next-line eqeqeq
		if ($(window).scrollTop() != '0') {
			$(this).fadeIn('slow');
		}
		let scrollDiv = $(this);
		$(window).scroll(() => {
			if ($(window).scrollTop() === '0') {
				$(scrollDiv).fadeOut('slow');
			} else {
				$(scrollDiv).fadeIn('slow');
			}
		});
		$(this).click(() => {
			$('html, body').animate({
				scrollTop: 0,
			}, 'slow');
		});
	};
})(jQuery);

jQuery(document).ready(($) => {
	$('.go-top').scrollToTop();
});
