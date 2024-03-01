const request = require('request');
const { expect } = require('chai');

const url = 'http://localhost:7865';


describe('Basic integration testing', () => {
  it('should return a status code of 200 and the welcome string', (done) => {
    request.get(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });

  });

});
