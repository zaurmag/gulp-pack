import inputmask from 'inputmask'
const $phoneMask = document.querySelector('.phone-mask--js')

if ($phoneMask) {
	inputmask({
		mask: '+7 (999) 999-99-99'
		// showMaskOnHover: false
	}).mask($phoneMask)
}

// jQuery(document).ready(($) => {
// 	// Callback form
// 	$('#callbackForm').simpleSendForm({
// 		autoClose: true
// 		// mailUrl: '../newquiz/form-submit/submit.php'
//
// 	}, () => {
// 		console.log('Событие перед отпрвкой формы')
// 	}, () => {
// 		console.log('Событие после отправки формы')
// 	})
// })
