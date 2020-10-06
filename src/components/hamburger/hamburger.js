jQuery(document).ready(function($) {
    var $hamburger = $('.hamburger--js');
    var $menu = $('.menu');

    enquire.register("screen and (max-width: 992px)", {
        match: function() {

        },
        deferSetup: true,
        setup: function() {
            $hamburger.on('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                if ($menu.hasClass('is-active')) {
                    hideMenu($menu);

                } else {
                    showMenu($menu);
                }
            });

            // Hide sidebar on page click/tap.
            $(document).on('click touchend', function(event) {
                if ($(event.target).closest($hamburger).length || $(event.target).closest($menu).length) return;
                hideMenu($menu);
            });

            $('.menu__mobile-close--js').on('click', function(e){
                e.preventDefault();
                hideMenu($menu);
            });
        },
        unmatch: function() {
            //$(document).off();
        }
    });
}); // end ready

function showMenu(menu) {
    menu.addClass('is-active');
    overlayAddFn();
}

function hideMenu(menu) {
    menu.removeClass('is-active');
    overlayRemFn();
}