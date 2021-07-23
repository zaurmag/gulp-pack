import enquire from 'enquire.js'
import {overlayAddFn} from '../overlay/overlay'
import {overlayRemFn} from '../overlay/overlay'

jQuery(document).ready(($) => {
	let $hamburger = $('.hamburger--js')
	let $menu = $('.menu')

	function showMenu(menu) {
		menu.addClass('is-active')
		overlayAddFn()
	}

	function hideMenu(menu) {
		menu.removeClass('is-active')
		overlayRemFn()
	}

	enquire.register('screen and (max-width: 992px)', {
		// match() {},
		deferSetup: true,
		setup() {
			$hamburger.on('click', (event) => {
				event.preventDefault()
				event.stopPropagation()

				if ($menu.hasClass('is-active')) {
					hideMenu($menu)
				} else {
					showMenu($menu)
				}
			})

			// Hide sidebar on page click/tap.
			$(document).on('click touchend', (event) => {
				if ($(event.target).closest($hamburger).length || $(event.target).closest($menu).length) {
					return
				}
				hideMenu($menu)
			})

			$('.menu__mobile-close--js').on('click', (e) => {
				e.preventDefault()
				hideMenu($menu)
			})
		},
		// unmatch() {}
	})
})
