/* global describe it */
const middleware = require('../middleware/sort.js')
const express = require('express')
const request = require('supertest')
const expect = require('chai').expect

describe('sorting middleware', () => {
  it('should allow sorting alphabetically by name', done => {
    const app = express()
    app.use(middleware)
    app.get('/', (req, res) => res.json([
      { name: 'Z' },
      { name: 'Y' },
      { name: 'X' },
      { name: 'A' },
      { name: 'B' },
      { name: 'C' }
    ]))
    request(app)
      .get('/?sorted=true')
      .expect(res => {
        const list = res.body
          .map(item => item.name)
        expect(list).to.equal(list.sort())
      })
      .end(done)
  })
})
