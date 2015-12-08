const express = require('express')
const jwt = require('express-jwt')
const errorhandler = require('errorhandler')

const whitelist = require('./middleware/whitelist')
const sorted = require('./middleware/sort')
const filter = require('./middleware/filter')

const participants = require('./endpoints/participants')

const app = express()

app.use(whitelist)
app.use(sorted)
app.use(filter)

const authorization = jwt({
  secret: new Buffer(process.env.AUTH0_SECRET, 'base64'),
  audience: process.env.AUTH0_AUDIENCE
})

app.get(
  '/participants',
  authorization,
  errorhandler({ log: false }),
  participants
)

module.exports = app
