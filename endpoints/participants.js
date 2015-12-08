const fetch = require('node-fetch')

module.exports = (req, res) => {
  fetch('http://raw.githubusercontent.com/jsstrn/ga-wdi-class/gh-pages/js/data.json')
    .then(data => data.json())
    .then(json => [].concat(
      json.students,
      json.instructors
    ))
    .then(participants => res.json(participants))
}
