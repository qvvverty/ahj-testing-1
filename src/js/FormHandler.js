import CardValidator from './CardValidator';

export default class FormHandler {
  constructor() {
    this.form = document.forms.cardValidation;
    this.input = this.form.cardNumber;
    this.button = this.form.validate;

    this.button.addEventListener('click', this.buttonHandler.bind(this));
    this.input.addEventListener('keydown', this.inputKeydownHandler.bind(this));
    this.input.addEventListener('input', this.inputHandler.bind(this));
  }

  buttonHandler() {
    if (this.input.value) {
      console.log(CardValidator.luhnAlgorithm(this.input.value));
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
    if (/\D/.test(this.input.value)) {
      this.input.classList.add('input-error');
      this.button.disabled = true;
    } else {
      this.input.classList.remove('input-error');
      this.button.disabled = false;
    }
  }
}
