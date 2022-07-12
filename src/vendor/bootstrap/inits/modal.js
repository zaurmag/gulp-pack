import Modal from 'bootstrap/js/dist/modal'

const $modals = Array.from(document.querySelectorAll('[data-bs-toggle="modal"]'))
const modals = $modals.map($modal => new Modal($modal))

// const myModalAlternative = new Modal('[data-bs-toggle="modal"]')

export default modals
