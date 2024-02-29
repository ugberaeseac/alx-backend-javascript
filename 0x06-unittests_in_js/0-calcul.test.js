const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('test for calculateNumber', () => {
  it('should get the sum of integers', () => {
    assert.strictEqual(calculateNumber(1, 1), 2);
    assert.strictEqual(calculateNumber(1, 2), 3);
    assert.strictEqual(calculateNumber(3, -2), 1);
    assert.strictEqual(calculateNumber(-9, 4), -5);
  });

  it('should round floats and calulate the sum', () => {
    assert.strictEqual(calculateNumber(1.2, 4.4), 5);
    assert.strictEqual(calculateNumber(4, 8.8), 13);
    assert.strictEqual(calculateNumber(-3.5, 5), 2);
    assert.strictEqual(calculateNumber(1, 3.8), 5);
    assert.strictEqual(calculateNumber(2.5, 4.6), 8);
    assert.strictEqual(calculateNumber(-5.9, -6), -12);
  });

  it('should check arguments',  () => {
    assert.strictEqual(calculateNumber(), NaN);
    assert.strictEqual(calculateNumber(3), NaN);
  });
});
