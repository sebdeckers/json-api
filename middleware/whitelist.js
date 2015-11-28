const wrap = require('./wrap')

module.exports = wrap(
  (req, list) => req.query.only
    ? list.map(item => {
      const filtered = {}
      filtered[req.query.only] = item[req.query.only]
      return filtered
    })
    : list
)
