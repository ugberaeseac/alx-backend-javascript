const chai = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js')
const sendPaymentRequestToApi = require('./4-payment.js');

expect = chai.expect;

describe('validate usage of Utils module/function', () => {
  it('should call utils once', () => {
	let sinonStub = sinon.stub(Utils, 'calculateNumber');
	let sinonSpy = sinon.spy(console, 'log');
	
	sinonStub.returns(10);
	
	sendPaymentRequestToApi(100, 20);
	expect(sinonStub.calledOnce).to.be.true;
	expect(sinonStub.calledWith('SUM', 100, 20)).to.be.true;
	expect(sinonSpy.calledWith('The total is: 10')).to.be.true;
	expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(10);
	
	sinonSpy.restore();
	sinonStub.restore();

  });

});
