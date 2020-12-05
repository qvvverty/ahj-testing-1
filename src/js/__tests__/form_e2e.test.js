import puppetteer from 'puppeteer';

const validCard = ['4357226333064808', 'visa'];

jest.setTimeout(30000);
describe('Card validation form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  describe('Valid card number', () => {
    test('add .accepted to .approval element and .selected to payment system element', async () => {
      await page.goto(baseUrl);

      const input = await page.$('[name=cardNumber]');
      const submit = await page.$('[name=validate]');
      await input.type(validCard[0]);
      submit.click();
      await page.waitForSelector('div.approval.accepted');
      await page.waitForSelector(`.card.${validCard[1]}.selected`);
    });
  });

  describe('Invalid card number', () => {
    test('add .input-error on input element', async () => {
      await page.goto(baseUrl);

      const input = await page.$('[name=cardNumber]');
      const submit = await page.$('[name=validate]');

      await input.type('z');
      await page.waitForSelector('[name=cardNumber].input-error');
      await page.keyboard.press('Backspace');
      await input.type('12345678901234');
      submit.click();
      await page.waitForSelector('div.approval.denied');
    });
  });
});
