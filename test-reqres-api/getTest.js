const request = require('supertest');
const expect = require('chai').expect;
const reqres = require('../config/reqres.config.json');

describe('GET API tests using SuperTest', () => {

    it('should successfully pass the test for get api without query param', (done) => {
        request(reqres.baseUrl)
            .get('/api/users/2')
            // .set('Accept', 'application/json')
            // .set('Content-Type', 'application/json')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.data.id).to.be.equal(2);
                expect(res.body.data.first_name).to.be.equal('Janet');
                done();
            });
    });
    it('should successfully pass the test for get api with query param', (done) => {
        request(reqres.baseUrl)
            .get('/api/users')
            .query({ page: '2' })
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.page).to.be.equal(2);
                expect(res.body.data[0].id).to.be.equal(7);
                expect(res.body.data[0].first_name).to.be.equal('Michael');
                done();
            });
    });

});