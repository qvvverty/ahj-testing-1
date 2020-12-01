export default class CardValidator {
  static isValidLuhn(cardNumber) {
    let digitSum = 0;

    for (let i = 0; i < cardNumber.length; i += 1) {
      let digit = parseInt(cardNumber[i], 10);
      if ((cardNumber.length - i) % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      digitSum += digit;
    }
    return digitSum % 10 === 0;
  }
}
