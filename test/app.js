/* global describe it */
const app = require('../app.js')
const request = require('supertest')

describe('Server', () => {
  it('should protect the API calls', done => {
    request(app)
      .get('/participants')
      .expect(401)
      .end(done)
  })
})
