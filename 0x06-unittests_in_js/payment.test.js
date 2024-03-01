const chai = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js')
const sendPaymentRequestToApi = require('./3-payment.js');

expect = chai.expect;

describe('validate usage of Utils module/function', () => {
  it('should call utils once', () => {
	let sinonSpy = sinon.spy(Utils, 'calculateNumber');
	sendPaymentRequestToApi(100, 20);
	expect(sinonSpy.calledOnce).to.be.true;
	expect(sinonSpy.calledWith('SUM', 100, 20)).to.be.true;
	expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(120);
	sinonSpy.restore();

  });

});
