/* global describe it */
const app = require('../app.js')
const request = require('supertest')
const expect = require('chai').expect

describe('Classroom', () => {
  it('should respond with JSON data', done => {
    request(app)
      .get('/participants')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done)
  })

  it('should provide a list of all class participants', done => {
    request(app)
      .get('/participants')
      .expect(res => {
        expect(res.body).to.be.an('array')
      })
      .end(done)
  })

  it('should allow searching by name', done => {
    request(app)
      .get('/participants?byName=SEB')
      .expect(res => {
        expect(res.body).to.have.length(1)
        expect(res.body[0]).to.include.keys({
          name: 'Sebastiaan Deckers'
        })
      })
      .end(done)
  })

  it('should allow sorting alphabetically by name', done => {
    request(app)
      .get('/participants?sorted=true')
      .expect(res => {
        const names = res.body
          .map(participant => participant.name)
        expect(names).to.equal(names.sort())
      })
      .end(done)
  })

  it('should allow whitelisting specific fields', done => {
    request(app)
      .get('/participants?only=name')
      .expect(res => {
        for (const participant of res.body) {
          expect(participant).to.have.all.keys('name')
        }
      })
      .end(done)
  })
})
