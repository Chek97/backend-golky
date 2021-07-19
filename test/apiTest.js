const request = require('supertest');
const { assert } = require('chai');
const app = require('../index');

describe('Testing Api', () => {
    it('should return json as default data format', (done) => {
        request(app)
            .get('/api/iecho')
            .expect('Content-Type', /json/)
            .expect(400, done)
    });
    
    it('should return json as data format when set Accept header to application/json', (done) => {
        request(app)
            .get('/api/iecho')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400, done)
    });
    
    it('response with json format when set text param ', (done) => {
        const text = 'texto';
        request(app)
            .get(`/api/iecho?text=${text}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });

    it('response with json format when set text param ', (done) => {
        const text = 'texto';
        request(app)
            .get(`/api/iecho?text=${text}`)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                assert
            })
    });
    
    it('response with status code 400 when missing text param', (done) => {
        request(app)
            .get('/api/iecho')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(400, done)
    });
});