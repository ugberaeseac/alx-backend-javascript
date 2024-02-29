const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;


describe('test for calculateNumber - SUM', () => {
  it('should get the sum of integers', () => {
    expect(calculateNumber('SUM', 1, 1)).to.equal(2);
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    expect(calculateNumber('SUM', 3, -2)).to.equal(1);
    expect(calculateNumber('SUM', -9, 4)).to.equal(-5);
  });

  it('should round floats and calulate the sum', () => {
    expect(calculateNumber('SUM', 1.2, 4.4)).to.equal(5);
    expect(calculateNumber('SUM', 4, 8.8)).to.equal(13);
    expect(calculateNumber('SUM', -3.5, 5)).to.equal(2);
    expect(calculateNumber('SUM', 1, 3.8)).to.equal( 5);
    expect(calculateNumber('SUM', 2.5, 4.6)).to.equal(8);
    expect(calculateNumber('SUM', -5.9, -6)).to.equal(-12);
  });

  it('should check arguments', () => {
    expect(calculateNumber('SUM', )).to.equal(NaN);
    expect(calculateNumber('SUM', 3)).to.equal(NaN);
  });
});


describe('test for calculateNumber - SUBSTRACT', () => {
  it('should get the difference of integers', () => {
    expect(calculateNumber('SUBSTRACT', 1, 1)).to.equal( 0);
    expect(calculateNumber('SUBSTRACT', 1, 2)).to.equal( -1);
    expect(calculateNumber('SUBSTRACT', 3, -2)).to.equal( 5);
    expect(calculateNumber('SUBSTRACT', -9, 4)).to.equal( -13);
  });

  it('should round floats and calulate the difference', () => {
    expect(calculateNumber('SUBSTRACT',1.2, 4.4)).to.equal( -3);
    expect(calculateNumber('SUBSTRACT',4, 8.8)).to.equal(-5);
    expect(calculateNumber('SUBSTRACT',-3.5, 5)).to.equal(-8);
    expect(calculateNumber('SUBSTRACT', 1, 3.8)).to.equal(-3);
    expect(calculateNumber('SUBSTRACT', 2.5, 4.6)).to.equal(-2);
    expect(calculateNumber('SUBSTRACT', -5.9, -6)).to.equal(0);
  });

  it('should check arguments',  () => {
    expect(calculateNumber('SUBSTRACT', )).to.equal(NaN);
    expect(calculateNumber('SUBSTRACT', 3)).to.equal(NaN);
  });
});



describe('test for calculateNumber - DIVIDE', () => {
  it('should get the division output of integers', () => {
    expect(calculateNumber('DIVIDE', 1, 1)).to.equal(1);
    expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 3, -2)).to.equal(-1.5);
    expect(calculateNumber('DIVIDE', -9, 3)).to.equal(-3);
  });

  it('should round floats and calulate the quotient', () => {
    expect(calculateNumber('DIVIDE', 1.2, 4.4)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', -3.5, 5)).to.equal(-0.6);
    expect(calculateNumber('DIVIDE', 1, 3.8)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 2.5, 5.6)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', -5.9, -6)).to.equal(1);
  });

  it('should return error when denominator is zero', () => {
    expect(calculateNumber('DIVIDE', 1.2, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', -3.5, 0)).to.equal('Error');
  });

  it('should check arguments', () => {
    expect(calculateNumber('DIVIDE', )).to.equal( NaN);
    expect(calculateNumber('DIVIDE', 3)).to.equal( NaN);
  });
});
