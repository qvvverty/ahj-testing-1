import CardFormatReader from '../CardFormatReader';
import CardValidator from '../CardValidator';

const testCardNumbers = [
  ['4357226333064808', 'visa', true],
  ['4024007107127432', 'visa', true],
  ['4716433781865405988', 'visa', true],
  ['6011659552599406', 'discover', true],
  ['6227352357976520', 'discover', true],
  ['6011416413854229550', 'discover', true],
  ['30201214990895', 'diners-club', true],
  ['36844101133154', 'diners-club', true],
  ['36179456787324', 'diners-club', true],
  ['4913802008513936', 'visa-electron', true],
  ['4844729780941320', 'visa-electron', true],
  ['4026260848556744', 'visa-electron', true],
  ['5483539130104286', 'mastercard', true],
  ['2221009547301457', 'mastercard', true],
  ['2221007756274712', 'mastercard', true],
  ['3540284239042733', 'jcb', true],
  ['3543219446008728', 'jcb', true],
  ['3589171145637570610', 'jcb', true],
  ['5893813203544841', 'maestro', true],
  ['5020197532842738', 'maestro', true],
  ['5893388676097734', 'maestro', true],
  ['345332435716122', 'american-express', true],
  ['371041756094202', 'american-express', true],
  ['374399907222016', 'american-express', true],
  ['214688753456882', 'mir', true],
  ['289374533367802', 'mir', true],
  ['297643904456783214', 'mir', true],
  ['012345678901234', 'unknown', false],
];

test.each(testCardNumbers)('Expect %s to belong %s and has validation: %s', (cardNumber, paymentSystem, isValid) => {
  expect(CardFormatReader.getPaySystem(cardNumber)).toBe(paymentSystem);
  expect(CardValidator.isValidLuhn(cardNumber)).toBe(isValid);
});
