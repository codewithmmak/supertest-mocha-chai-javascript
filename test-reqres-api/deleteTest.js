const request = require('supertest');
const expect = require('chai').expect;
const reqres = require('../config/reqres.config.json');

describe('DELETE API tests using SuperTest', () => {

    it('should successfully pass the test for delete request', (done) => {
        request(reqres.baseUrl)
            .delete('/api/users/2')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(204);
                done();
            });
    });
});