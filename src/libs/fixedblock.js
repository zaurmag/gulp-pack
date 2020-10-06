/* ============================================================================
   Fixed block Func
   ========================================================================= */
(function($) {
    $.fn.addFixClass = function(options) {
        options = $.extend({
            offset: 200,
            timeAnimate: 500,
            destroy: false
        }, options);
        var fixClass = $(this);
        $(window).bind('scroll', function() {
            addClassFn();
        });
        if ($(window).scrollTop() >= options.offset && !options.destroy) {
            addClassFn();
        }
        function addClassFn() {
            if ($(window).scrollTop() >= options.offset && !options.destroy) {
                $(fixClass).removeClass('is-static').addClass("is-fixed");
                setTimeout(function() {
                    $(fixClass).addClass("is-animate");
                }, options.timeAnimate);
            } else {
                $(fixClass).addClass('is-static').removeClass("is-fixed");
                setTimeout(function() {
                    $(fixClass).removeClass("is-animate");
                }, options.timeAnimate);
            }
        }
        if (options.destroy) {
            $(window).unbind('scroll');
            $(fixClass).addClass('static').removeClass('fixed animate');
        }
    };
})(jQuery);
