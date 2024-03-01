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

});
