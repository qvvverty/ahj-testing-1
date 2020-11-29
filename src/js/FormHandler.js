import CardValidator from './CardValidator';

export default class FormHandler {
  init() {
    this.form = document.forms.cardValidation;
    this.input = this.form.cardNumber;
    this.button = this.form.validate;
    this.acceptedElem = this.form.querySelector('div.approval.accepted');
    this.deniedElem = this.form.querySelector('div.approval.denied');

    this.button.addEventListener('click', this.buttonHandler.bind(this));
    this.input.addEventListener('keydown', this.inputKeydownHandler.bind(this));
    this.input.addEventListener('input', this.inputHandler.bind(this));
  }

  buttonHandler() {
    if (CardValidator.luhnAlgorithm(this.input.value)) {
      this.acceptedElem.classList.add('visible');
    } else {
      this.deniedElem.classList.add('visible');
    }
  }

  inputKeydownHandler(keydown) {
    if (keydown.keyCode === 13) {
      keydown.preventDefault();
      this.button.click();
    }
  }

  inputHandler() {
    this.button.disabled = !this.input.value;
    if (this.acceptedElem.classList.contains('visible') || this.deniedElem.classList.contains('visible')) {
      this.acceptedElem.classList.remove('visible');
      this.deniedElem.classList.remove('visible');
    }
    if (/\D/.test(this.input.value)) {
      this.input.classList.add('input-error');
      this.button.disabled = true;
    } else {
      this.input.classList.remove('input-error');
    }
  }
}
