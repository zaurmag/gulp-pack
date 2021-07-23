const body = document.body

export function overlayAdd() {
	const overlay = document.createElement('div')
	overlay.classList.add('overlay')
	body.classList.add('is-active')
	setTimeout(() => body.classList.add('is-animate'), 100)
	body.appendChild(overlay)

	return overlay
}
export function overlayRemove() {
	const overlay = document.querySelector('.overlay')
	overlay.remove()
	body.classList.remove('is-animate', 'is-active')
}
