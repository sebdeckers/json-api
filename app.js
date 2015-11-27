const fetch = require('node-fetch')
const express = require('express')

const whitelist = require('./middleware/whitelist')
const sorted = require('./middleware/sort')
const filter = require('./middleware/filter')

const app = express()

app.use(whitelist)
app.use(sorted)
app.use(filter)

app.get('/participants', (req, res) => {
  fetch('http://raw.githubusercontent.com/jsstrn/ga-wdi-class/gh-pages/js/data.json')
    .then(data => data.json())
    .then(json => [].concat(
      json.students,
      json.instructors
    ))
    .then(participants => res.json(participants))
})

module.exports = app
