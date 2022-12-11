const request = require('supertest');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker');
const reqres = require('../config/reqres.config.json');
const userData = require('../test-data/user-data.json');

const randomName = faker.name.findName();
const randomJob = faker.name.jobTitle();

describe('POST API tests using SuperTest', () => {

    it('should successfully pass the test for POST api when test data from json file is used', (done) => {
        request(reqres.baseUrl)
            .post('/api/users')
            .send(userData)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(201);
                expect(res.body.name).to.be.equal('Code with MMAK');
                expect(res.body.job).to.be.equal('Testing');
                expect(res.body.id).not.to.be.null;
                expect(res.body.createdAt).not.to.be.null;
                done();
            });
    });

    it('should successfully pass the test for POST api when fakerjs dummy data is used', (done) => {
        request(reqres.baseUrl)
            .post('/api/users')
            .send({
                "name": randomName,
                "job": randomJob
            })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(201);
                expect(res.body.name).to.be.equal(randomName);
                expect(res.body.job).to.be.equal(randomJob);
                expect(res.body.id).not.to.be.null;
                expect(res.body.createdAt).not.to.be.null;
                done();
            });
    });
});