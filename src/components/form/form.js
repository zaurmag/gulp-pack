jQuery(document).ready(($) => {
	/**
	 * Form init
	 */
	// Callback form
	$('#callbackForm').simpleSendForm({
		autoClose: true
		// mailUrl: '../newquiz/form-submit/submit.php'

	}, () => {
		console.log(' Событие перед отпрвкой формы ')
	}, () => {
		console.log(' Событие после отправки формы ')
	})
