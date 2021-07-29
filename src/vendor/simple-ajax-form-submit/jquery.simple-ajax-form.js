/**
 * Simple Ajax form
 * @author: Zaur Magomedov
 */

(function ($) {
	$.fn.simpleSendForm = function (options, beforeSubmit, callback) {
		// Options
		options = $.extend({
			successTitle: 'Спасибо, что выбрали нас!',
			successText: 'Мы свяжемся с Вами в ближайшее время.',
			errorTitle: 'Сообщение не отправлено!',
			errorSubmit: 'Ошибка отправки формы!',
			errorNocaptcha: 'Вы не заполнили каптчу',
			errorCaptcha: 'Вы не прошли проверку каптчи',
			mailUrl: '../form-submit/submit.php',
			autoClear: true,
			autoClose: false,
			autoCloseDelay: 5000,
			debug: false,
			captcha: false,
			captchaPublicKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
			successMarkup: false,
			successInPopup: false
		}, options)

		if (options.captcha) {
			window.onload = function () {
				let addScriptCaptcha = document.createElement('script')
				addScriptCaptcha.src = 'https://www.google.com/recaptcha/api.js'
				document.body.appendChild(addScriptCaptcha)
			}
		}

		// Submit function
		let make = () => {
			const $this = $(this)
			const id = $this.attr('id')
			const btn = $this.find('.btn-submit--js')
			const captcha = $this.find('.recaptcha')
			const hideSuccess = $this.find('.form__hide-success')

			if (options.captcha) {
				captcha.append(`<div class="g-recaptcha" data-sitekey="${options.captchaPublicKey}"></div>`)
			}

			$(this).submit(function (event) {
				let data = $(this).serialize()
				let btnClass = 'progress-bar-animated progress-bar-striped bg-success text-white'
				let phone = $this.find('input[type="tel"]')

				function errorRes(errorMessage) {
					btn.removeClass(btnClass)
					$this.append(`<div class="form__error alert alert-danger text-center mt-3 mb-0">${errorMessage}</div>`)
					setTimeout(() => {
						$this.find('.form__error').remove()
					}, 5000)
				}

				if ($this[0].checkValidity() === false) {
					$this.addClass('was-validated')
					errorRes('Пожалуйста, заполните обязательные поля формы!')

					return false
				}

				if (phone.length && !phone.hasClass('is-complete')) {
					$this.addClass('was-validated')
					errorRes('Введите корректный номер телефона!')

					return false
				}

				const successTemplate = () => {
					return `
						<h4 class="form__success-title">${options.successTitle}</h4>
						<p class = "form__success-text" >${options.successText}</p>
					`
				}

				$.ajax({
					url: options.mailUrl,
					type: 'POST',
					data,
					beforeSend() {
						btn.addClass(btnClass)
						if (beforeSubmit) {
							beforeSubmit()
						}
					},
					success(result) {
						if (result == 1) {
							if (!options.autoClear) {
								$this[0].reset()
							}

							if (options.captcha) {
								grecaptcha.reset()
							}
							$this.removeClass('was-validated')

							let templ = options.successMarkup || successTemplate

							if (options.autoClear) {
								hideSuccess.addClass('is-hidden')
							} else {
								hideSuccess.addClass('is-inactive').delay(500).addClass('is-hidden')
							}

							hideSuccess.after(`<div id="success-${id}" class="form__sys-message" />`)
							const sysMessage = $this.find('.form__sys-message')
							sysMessage.append(templ)

							if (options.successInPopup) {
								sysMessage.addClass('mfp-hide mfp-white-block')

								setTimeout(() => {
									$.magnificPopup.open({
										items: {
											src: `#success-${id}` // может быть HTML строкой, jQuery объектом, или CSS селектором
										},
										type: 'inline',
										removalDelay: 160,
										mainClass: 'mfp-scale',
										callbacks: {
											close: () => {
												hideSuccess.removeClass('is-inactive is-hidden')
											}
										}
									})
								}, 100)
							}

							setTimeout(() => {
								sysMessage.addClass('is-active')
							}, 90)

							if (options.autoClear) {
								setTimeout(() => {
									sysMessage.fadeOut().delay(3000).remove()
									hideSuccess.removeClass('is-hidden')
								}, 5000)
							}

							btn.removeClass(btnClass)

							if (options.autoClose) {
								setTimeout(() => {
									$.magnificPopup.close()
								}, options.autoCloseDelay)
							}
							if (callback) {
								callback(event)
							}
						} else if (result == 2) {
							errorRes(options.errorNocaptcha)
						} else if (result == 3) {
							errorRes(options.errorCaptcha)
						} else {
							errorRes(options.errorSubmit)
						}
						if (options.debug) {
							console.log(result)
						}
					},
					error(result) {
						errorRes(options.errorSubmit)
						if (options.debug) {
							console.log(result)
						}
					}
				})

				return false
			})
		}

		return this.each(make)
	}
})(jQuery)
