import inputmask from 'inputmask'
const $phoneMask = document.querySelector('.js-phone-mask')

if ($phoneMask) {
	inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	}).mask($phoneMask)
}
