const request = require('supertest');
const expect = require('chai').expect;
const fakerestapi = require('../config/fakerestapi.config.json');

describe('GET API tests using SuperTest', () => {

    it('should successfully pass the test for get api with path param', (done) => {
        let param = 1;
        request(fakerestapi.baseUrl)
            .get('/api/v1/Authors/' + param)
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.id).to.be.equal(1);
                done();
            });
    });

});