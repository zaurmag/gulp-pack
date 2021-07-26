/* ============================================================================
   Fixed block Func
   ========================================================================= */
(function ($) {
	$.fn.addFixClass = function (options) {
		options = $.extend({
			offset: 200,
			timeAnimate: 500,
			destroy: false
		}, options)
		let fixClass = $(this)
		function addClassFn() {
			if ($(window).scrollTop() >= options.offset && !options.destroy) {
				$(fixClass).removeClass('is-static').addClass('is-fixed')
				setTimeout(() => {
					$(fixClass).addClass('is-animate')
				}, options.timeAnimate)
			} else {
				$(fixClass).addClass('is-static').removeClass('is-fixed')
				setTimeout(() => {
					$(fixClass).removeClass('is-animate')
				}, options.timeAnimate)
			}
		}
		$(window).bind('scroll', () => {
			addClassFn()
		})
		if ($(window).scrollTop() >= options.offset && !options.destroy) {
			addClassFn()
		}
		if (options.destroy) {
			$(window).unbind('scroll')
			$(fixClass).addClass('static').removeClass('fixed animate')
		}
	}
})(jQuery)
