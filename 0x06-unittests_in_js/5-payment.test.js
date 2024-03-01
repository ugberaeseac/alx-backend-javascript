const chai = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./5-payment.js');
const expect = chai.expect;

describe('', () => {
  let sinonSpy;
  beforeEach(() => {
   sinonSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
   sinonSpy.restore();
  });
  it('', () => {
    sendPaymentRequestToApi(100, 20);
    expect(sinonSpy.calledOnce).to.be.true;
    expect(sinonSpy.calledWith('The total is: 120'));

  });
  it('', () => {
    sendPaymentRequestToApi(10, 10);
    expect(sinonSpy.calledOnce).to.be.true;
    expect(sinonSpy.calledWith('The total is: 20'));

  });

});
