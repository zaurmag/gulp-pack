/* Ajax SimpleSubmit Form Plugin
   ========================================================================= */
(function($) {
    $.fn.simpleSendForm = function(options) {
        // Options
        options = $.extend({
            successTitle: "Спасибо, что выбрали нас!",
            successText: "Мы свяжемся с Вами в ближайшее время.",
            errorTitle: "Сообщение не отправлено!",
            errorSubmit: "Ошибка отправки формы!",
            errorNocaptcha: "Вы не заполнили каптчу",
            errorCaptcha: "Вы не прошли проверку каптчи",
            mailUrl: "../form-submit/submit.php",
            autoClose: false,
            autoCloseDelay: 5000,
            debug: false,
            captcha: false,
            captchaPublicKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
        }, options);

        if(options.captcha) {
            window.onload = function () {
                var addScriptCaptcha = document.createElement('script');
                addScriptCaptcha.src = 'https://www.google.com/recaptcha/api.js';
                document.body.appendChild(addScriptCaptcha);
            };
        }

        // Submit function
        var make = function() {
            var $this = $(this),
                form = $this.find('.form'),
                btn = $this.find('.btn-submit'),
                captcha = $this.find('.recaptcha');

            if(options.captcha) {
                captcha.append('<div class="g-recaptcha" data-sitekey="' + options.captchaPublicKey + '"></div>')
            }

            $(this).submit(function() {
                var data = $(this).serialize();
                function errorRes(errorMessage) {
                    btn.removeClass('progress-bar-animated progress-bar-striped bg-success');
                    $this.append('<div class="form__error alert alert-danger text-center mt-3 mb-0">' + errorMessage + '</div>');
                    setTimeout(function() {
                        $this.find('.form__error').remove();
                    }, 5000);
                }
                $.ajax({
                    url: options.mailUrl,
                    type: "POST",
                    data: data,
                    beforeSend: function() {
                        btn.addClass('progress-bar-animated progress-bar-striped bg-success');
                    },
                    success: function(res) {
                        if (res == 1) {
                            $this[0].reset();
                            if(options.captcha) {
                                grecaptcha.reset();
                            }
                            $this.find('.form__hide-success').slideUp().delay(5000).slideDown();
                            btn.removeClass('progress-bar-animated progress-bar-striped bg-success');
                            $this.find('.form__hide-success').after('<div class="form__sys-message alert alert-success text-center mb-0"></div>');
                            $this.find('.form__sys-message').html('<h4 class="form__success-title alert-heading">' + options.successTitle + '</h4><p class = "form__success-text" >' + options.successText + '</p>');
                            setTimeout(function() {
                                $this.find('.form__sys-message').fadeOut().delay(3000).remove();
                                if (options.autoClose) {
                                    $.magnificPopup.close();
                                }
                            }, options.autoCloseDelay);
                        } else if (res == 2) {
                            errorRes(options.errorNocaptcha);
                        } else if (res == 3) {
                            errorRes(options.errorCaptcha);
                        } else {
                            errorRes(options.errorSubmit);
                        }
                        if(options.debug) {
                            console.log(res);
                        }
                    },
                    error: function(res) {
                        errorRes(options.errorSubmit);
                        if(options.debug) {
                            console.log(res);
                        }
                    }
                });
                return false;
            });
        };

        return this.each(make);
    };
})(jQuery);