/* global describe it */
const endpoint = require('../endpoints/participants.js')
const express = require('express')
const request = require('supertest')
const expect = require('chai').expect

describe('Participants', () => {
  it('should provide a list of all class participants', done => {
    const app = express()
    app.get('/', endpoint)
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => expect(res.body).to.be.an('array'))
      .end(done)
  })
})
