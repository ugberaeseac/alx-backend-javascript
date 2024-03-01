const request = require('request');
const { expect } = require('chai');

describe('Basic integration testing', () => {
  it('should return a status code of 200 and the welcome string', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return a status code of 200 and the welcome string', (done) => {
    request.get('http://localhost:7865/cart/32', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 32');
      done();
    });
  });

  it('should return a status code of 400 and the welcome string', (done) => {
    request.get('http://localhost:7865/cart/items', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return payments available ', (done) => {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
  
  it('should return status 200 and the welcome message', (done) => {
    request.post({url: 'http://localhost:7865/login', json:{'userName': 'Betty'}}, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

});
