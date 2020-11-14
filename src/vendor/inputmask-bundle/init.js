jQuery(document).ready(($) => {
	$('.phone-mask--js').inputmask({
		mask: '+7 (999) 999-99-99',
		// placeholder: '+7 (___) ___-__-__',
		// showMaskOnHover: false,
		onincomplete() {
			$($(this)[0]).removeClass('is-complete');
			$($(this)[0]).addClass('is-incomplete');
		},

		oncomplete() {
			$($(this)[0]).addClass('is-complete');
			$($(this)[0]).removeClass('is-incomplete');
		},
	});

	$('.email-mask--js').inputmask();
});
