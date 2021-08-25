function scrollTo(to, duration = 700) {
	const element = document.scrollingElement || document.documentElement
	const start = element.scrollTop
	const change = to - start
	const startDate = +new Date()
	// t = current time
	// b = start value
	// c = change in value
	// d = duration
	const easeInOutQuad = (t, b, c, d) => {
		t /= d / 2
		if (t < 1) {
			return c / 2 * t * t + b
		}
		t--

		return -c / 2 * (t * (t - 2) - 1) + b
	}
	const animateScroll = () => {
		const currentDate = +new Date()
		const currentTime = currentDate - startDate
		element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration), 10)
		if (currentTime < duration) {
			requestAnimationFrame(animateScroll)
		} else {
			element.scrollTop = to
		}
	}
	animateScroll()
}

document.addEventListener('DOMContentLoaded', () => {
	const $btn = document.querySelector('.go-top--js')
	if ($btn) {
		window.addEventListener('scroll', () => {
			if (pageYOffset > 100) {
				$btn.classList.add('is-show')
			} else {
				$btn.classList.remove('is-show')
			}
		})

		// Click on $btn
		$btn.addEventListener('click', event => {
			event.preventDefault()
			scrollTo(0, 200)
		})
	}
})

