/* global describe it */
const middleware = require('../middleware/filter.js')
const express = require('express')
const request = require('supertest')
const expect = require('chai').expect

describe('filter middleware', () => {
  it('should allow searching by name', done => {
    const app = express()
    app.use(middleware)
    app.get('/', (req, res) => res.json([
      { name: 'Sebastiaan Deckers' },
      { name: 'Cheryl Wee' }
    ]))
    request(app)
      .get('/?byName=SEB')
      .expect(res => {
        expect(res.body).to.have.length(1)
        expect(res.body[0]).to.include.keys({
          name: 'Sebastiaan Deckers'
        })
      })
      .end(done)
  })
})
