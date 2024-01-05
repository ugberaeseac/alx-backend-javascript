import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color, range);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
