/* global describe it */
const middleware = require('../middleware/whitelist.js')
const express = require('express')
const request = require('supertest')
const expect = require('chai').expect

describe('whitelist middleware', () => {
  it('should return only specific fields', done => {
    const app = express()
    app.use(middleware)
    app.get('/', (req, res) => res.json([
      { name: 'Seb', foo: 123 },
      { name: 'Cheryl', foo: 456 }
    ]))
    request(app)
      .get('/?only=name')
      .expect(res => {
        for (const participant of res.body) {
          expect(participant).to.have.all.keys('name')
        }
      })
      .end(done)
  })
})
