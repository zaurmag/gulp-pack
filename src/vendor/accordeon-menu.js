// ======= Plugin Accordeon Vmenu =======
(function ($) {
	jQuery.fn.dropdownMenu = function (options) {
		options = $.extend({
			drpArrow: true,
			classNameParent: 'parent',
			classNameSubmenu: 'sub-menu',
			classNameCurrent: 'active',
			destroy: false
		}, options)
		let $this = $(this)
		let submenu = `ul.${options.classNameSubmenu}`
		let parent = `li.${options.classNameParent}`
		let parentA = $this.find(`${parent} > a, ${parent} > .nav-header`)

		function clickHandler(event) {
			event.preventDefault()
			const el = $(this)

			let checkElement = el.next()
			if (checkElement.is('ul') && checkElement.is(':visible')) {
				checkElement.slideUp(200)
				el.parent(parent).removeClass('open-child').addClass('close-child')
			}
			if (checkElement.is('ul') && !checkElement.is(':visible')) {
				el.find('ul:visible').slideUp(200)
				el.parent(parent).addClass('open-child').removeClass('close-child')
				checkElement.slideDown(200)
			}
		}

		function dropdownFn(clickElem) {
			for (let i = 0; i < clickElem.length; i++) {
				const item = clickElem[i]

				$(item).on('click', clickHandler)

				if (options.destroy) {
					$(item).off('click', clickHandler)
				}
			}
		}

		let make = function () {
			if (!options.destroy) {
				$this.find(submenu).hide()
				$this.find(`li.${options.classNameCurrent} > a + ${submenu}`).show()
				if (options.drpArrow) {
					parentA.after('<span class="btn-dropdown"><i class="icon icon-dropdown"></i></span>')
				}

				let btnDropdown = $this.find('.btn-dropdown')
				if (options.drpArrow) {
					dropdownFn(btnDropdown)
				} else {
					dropdownFn(parentA)
				}
			}
		}
		if (options.destroy) {
			$this.find('.btn-dropdown').remove()
			$this.find(submenu).removeAttr('style')
		}

		return this.each(make)
	}
})(jQuery)
