import 'owl.carousel'

jQuery(document).ready(($) => {
	$('.owl-carousel--js').owlCarousel({
		autoplay: false,
		loop: false,
		margin: 10,
		nav: false,
		dots: true,
		autoHeight: false,
		autoHeightClass: 'owl-height',
		navText: ['<svg class="icon icon-chevron-left"><use xlink:href="#chevron-left"></use></svg>', '<svg class="icon icon-chevron-right"><use xlink:href="#chevron-right"></use></svg>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	})
})
