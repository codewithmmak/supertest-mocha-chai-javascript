const request = require('supertest');
const expect = require('chai').expect;
const reqres = require('../config/reqres.config.json');

describe('PUT API tests using SuperTest', () => {

    it('should successfully pass the test for post api', (done) => {
        request(reqres.baseUrl)
            .put('/api/users/2')
            .send({ name: 'Andy', job: 'Admin' })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.name).to.be.equal('Andy');
                expect(res.body.job).to.be.equal('Admin');
                expect(res.body.updatedAt).not.to.be.null;
                done();
            });
    });
});