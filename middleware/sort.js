const wrap = require('./wrap')

module.exports = wrap(
  (req, list) => req.query.sorted
    ? list.sort((a, b) => a.name.localeCompare(b.name))
    : list
)
