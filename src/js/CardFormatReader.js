export default class CardFormatReader {
  static getPaySystem(cardNumber) {
    if (/^34|^37/.test(cardNumber)) return 'american-express';

    if (/^36|^30[0-5]/.test(cardNumber)) return 'diners-club';

    if (/^6011|^64[4-9]|^65/.test(cardNumber)) return 'discover';
    if (+cardNumber.slice(0, 6) >= 622126 && +cardNumber.slice(0, 6) <= 622925) return 'discover';

    if (+cardNumber.slice(0, 4) >= 3528 && +cardNumber.slice(0, 4) <= 3589) return 'jcb';

    if (/^5018|^5020|^5038|^5893|^6304|^6759|^676[1-3]/.test(cardNumber)) return 'maestro';

    if (/^5[1-5]/.test(cardNumber)) return 'mastercard';
    if (+cardNumber.slice(0, 6) >= 222100 && +cardNumber.slice(0, 6) <= 272099) return 'mastercard';

    if (/^4026|^417500|^4508|^4844|^4913|^4917/.test(cardNumber)) return 'visa-electron';

    if (/^4/.test(cardNumber)) return 'visa';

    if (/^2/.test(cardNumber)) return 'mir';

    return 'unknown';
  }
}
