function overlayAddFn() {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');
    setTimeout(function() {
        document.body.classList.add('animate');
    }, 100);
    document.body.appendChild(overlay);
}
function overlayRemFn() {
    jQuery(document).ready(function($) {
        $('.overlay').remove();
        $('body').removeClass('animate');
    });
}