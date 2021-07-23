import Inputmask from 'inputmask'
const phoneMask = document.querySelector('.phone-mask--js')

Inputmask({
	mask: '+7 (999) 999-99-99',
	// showMaskOnHover: false
}).mask(phoneMask)
