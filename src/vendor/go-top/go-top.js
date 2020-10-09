(function ($) {
	jQuery.fn.scrollToTop = function () {
		$(this).hide().removeAttr('href');
		if ($(window).scrollTop() != '0') {
			$(this).fadeIn('slow');
		}
		let scrollDiv = $(this);
		$(window).scroll(() => {
			if ($(window).scrollTop() == '0') {
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
