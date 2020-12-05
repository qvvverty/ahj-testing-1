import FormHandler from '../FormHandler';
import testCardNumbers from './ValidatorAndReader.test';

testCardNumbers.splice(testCardNumbers.length - 1, ['711111111111111111', 'unknown']);

document.body.innerHTML = `
<ul class="cards">
  <li class="card visa"></li>
  <li class="card visa-electron"></li>
  <li class="card mastercard"></li>
  <li class="card maestro"></li>
  <li class="card american-express"></li>
  <li class="card discover"></li>
  <li class="card jcb"></li>
  <li class="card diners-club"></li>
  <li class="card mir"></li>
  <li class="card unknown"></li>
</ul>
<form name="cardValidation" class="card-validation-form">
  <input type="text" name="cardNumber" class="card-validation-input">
  <button type="button" name="validate" class="card-validation-button" disabled>Validate</button>
  <div class="approval"></div>
</form>
`;

document.addEventListener('DOMContentLoaded', () => {
  const formHandler = new FormHandler();
  formHandler.init();
});
// const formHandler = new FormHandler();
// formHandler.init();
const input = document.querySelector('[name=cardNumber]');
const inputEvent = new Event('input');
const submit = document.querySelector('[name=validate]');

test.each(testCardNumbers)('Expect input %s to add .selected to %s element', (cardNumber, paymentSystem) => {
  input.value = cardNumber;
  input.dispatchEvent(inputEvent);
  submit.click();
  expect(document.querySelector(`.card.${paymentSystem}`).classList.contains('selected')).toBe(true);
});

// test('Test', () => {
//   expect(document.forms.length).toBe(1);
// });
