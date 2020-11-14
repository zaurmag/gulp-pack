export function overlayAddFn() {
	let overlay = document.createElement('div');
	overlay.classList.add('overlay');
	setTimeout(() => {
		document.body.classList.add('animate');
	}, 100);
	document.body.appendChild(overlay);
}
export function overlayRemFn() {
	jQuery(document).ready(($) => {
		$('.overlay').remove();
		$('body').removeClass('animate');
	});
}
