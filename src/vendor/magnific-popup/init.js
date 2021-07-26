import 'magnific-popup'

jQuery(document).ready(($) => {
	/**
     * Type image
     */
	$('.mfp-image--js').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		fixedContentPos: true,
		overflowY: 'auto',
		mainClass: 'mfp-no-margins mfp-scale',
		removalDelay: 160
	})

	/**
	 * Type image gallery
	 */
	$('.mfp-gallery--js').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: true,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-scale', // class to remove default margin from left and right side
		removalDelay: 160,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	})

	/**
     * Type inline
     */
	$('.mfp-window--js').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		mainClass: 'mfp-top-up',
		removalDelay: 160
	})

	/**
     * Type iframe (video)
     */
	$('.mfp-video--js').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-scale',
		removalDelay: 160,
		preloader: true,
		fixedContentPos: false
	})

	/**
     * Type inline - focus on filed #name
     */
	$('.mfp-form--js').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		mainClass: 'mfp-top-up',
		removalDelay: 160,
		focus: '#name, #username'
		// callbacks: {
		// 	open() {
		//
		// 	},
		// },
	})

	/**
     * Type ajax
     */
	$('.mfp-ajax--js').magnificPopup({
		type: 'ajax',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: true,
		tLoading: '<img src="/templates/template_zm_it/images/preload.gif" />',
		midClick: true,
		mainClass: 'mfp-scale',
		removalDelay: 160
	})
}) // end ready
