import CardValidator from './CardValidator';
import CardFormatReader from './CardFormatReader';

export default class FormHandler {
  init() {
    this.form = document.forms.cardValidation;
    this.input = this.form.cardNumber;
    this.button = this.form.validate;
    this.approvalElem = this.form.querySelector('div.approval');

    this.button.addEventListener('click', this.buttonHandler.bind(this));
    this.input.addEventListener('keydown', this.inputKeydownHandler.bind(this));
    this.input.addEventListener('input', this.inputHandler.bind(this));
  }

  buttonHandler() {
    if (CardValidator.isValidLuhn(this.input.value)) {
      this.approvalElem.classList.add('accepted');

      const cardPaySystem = CardFormatReader.getPaySystem(this.input.value);
      this.selectedPaySystemElem = document.querySelector(`li.${cardPaySystem}`);
      this.selectedPaySystemElem.classList.add('selected');
    } else {
      this.approvalElem.classList.add('denied');
    }
  }

  inputKeydownHandler(keydown) {
    if (keydown.keyCode === 13) {
      keydown.preventDefault();
      this.button.click();
    }
  }

  inputHandler() {
    this.button.disabled = !(this.input.value.length > 13 && this.input.value.length < 20);
    if (this.approvalElem.classList.length > 1) {
      this.approvalElem.classList.remove('accepted', 'denied');
    }

    if (this.selectedPaySystemElem && this.selectedPaySystemElem.classList.length > 2) {
      this.selectedPaySystemElem.classList.remove('selected');
    }

    if (/\D/.test(this.input.value)) {
      this.input.classList.add('input-error');
      this.button.disabled = true;
    } else {
      this.input.classList.remove('input-error');
    }
  }
}
