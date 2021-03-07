const email = document.getElementById('email')
const form = document.getElementById('form')
const button = document.getElementById('button')
const footerError = document.getElementById('footer__error')
const modal = document.getElementById('modal')
const IconClose = document.getElementById('icon__close')

form.addEventListener('submit', (e) => e.preventDefault())
IconClose.addEventListener('click', () => modal.classList.remove('show'))

const validateEmail = (data) => {
  const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (emailRegex.test(data)) {
    modal.classList.add('show')
    email.value = ''
    email.classList.remove('error')
    email.classList.remove('footer__email--active')
    button.classList.remove('footer__button--send')
    footerError.classList.remove('footer__arrow--active')
  } 
  else {
    email.classList.add('error')
    footerError.classList.add('footer__arrow--active')
    email.classList.add('footer__email--active')
    button.classList.add('footer__button--send')

  } 
}

button.addEventListener('click', () => {
  validateEmail(email.value)
})