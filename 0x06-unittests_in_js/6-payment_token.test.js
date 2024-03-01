const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('Async tests with done', () => {
  it('should resolve a promise if success === true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.include({data: 'Successful response from the API'});
        done();
      })
      .catch((error) => {
	 done(error);
      });

  });

});
