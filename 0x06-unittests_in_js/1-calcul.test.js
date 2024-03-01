const calculateNumber = require('./1-calcul.js');
const assert = require('assert');


describe('test for calculateNumber - SUM', () => {
  it('should get the sum of integers', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 1), 2);
    assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    assert.strictEqual(calculateNumber('SUM', 3, -2), 1);
    assert.strictEqual(calculateNumber('SUM', -9, 4), -5);
  });

  it('should round floats and calulate the sum', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 4.4), 5);
    assert.strictEqual(calculateNumber('SUM', 4, 8.8), 13);
    assert.strictEqual(calculateNumber('SUM', -3.5, 5), 2);
    assert.strictEqual(calculateNumber('SUM', 1, 3.8), 5);
    assert.strictEqual(calculateNumber('SUM', 2.5, 4.6), 8);
    assert.strictEqual(calculateNumber('SUM', -5.9, -6), -12);
  });

  it('should check arguments',  () => {
    assert.strictEqual(calculateNumber('SUM', ), NaN);
    assert.strictEqual(calculateNumber('SUM', 3), NaN);
  });
});


describe('test for calculateNumber - SUBTRACT', () => {
  it('should get the difference of integers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 1), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 2), -1);
    assert.strictEqual(calculateNumber('SUBTRACT', 3, -2), 5);
    assert.strictEqual(calculateNumber('SUBTRACT', -9, 4), -13);
  });

  it('should round floats and calulate the difference', () => {
    assert.strictEqual(calculateNumber('SUBTRACT',1.2, 4.4), -3);
    assert.strictEqual(calculateNumber('SUBTRACT',4, 8.8), -5);
    assert.strictEqual(calculateNumber('SUBTRACT',-3.5, 5), -8);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.8), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 4.6), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', -5.9, -6), 0);
  });

  it('should check arguments',  () => {
    assert.strictEqual(calculateNumber('SUBTRACT', ), NaN);
    assert.strictEqual(calculateNumber('SUBTRACT', 3), NaN);
  });
});





describe('test for calculateNumber - DIVIDE', () => {
  it('should get the division output of integers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 1), 1);
    assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
    assert.strictEqual(calculateNumber('DIVIDE', 3, -2), -1.5);
    assert.strictEqual(calculateNumber('DIVIDE', -9, 3), -3);
  });

  it('should round floats and calulate the quotient', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 4.4), 0.25);
    assert.strictEqual(calculateNumber('DIVIDE', -3.5, 5), -0.6);
    assert.strictEqual(calculateNumber('DIVIDE', 1, 3.8), 0.25);
    assert.strictEqual(calculateNumber('DIVIDE', 2.5, 5.6), 0.5);
    assert.strictEqual(calculateNumber('DIVIDE', -5.9, -6), 1);
  });

  it('should return error when denominator is zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', -3.5, 0), 'Error');
  });

  it('should check arguments',  () => {
    assert.strictEqual(calculateNumber('DIVIDE', ), NaN);
    assert.strictEqual(calculateNumber('DIVIDE', 3), NaN);
  });
});
