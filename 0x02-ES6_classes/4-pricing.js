import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  get amount() { return this._amount; }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    }
  }

  get currency() { return this._currency; }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }
}
