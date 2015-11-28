const wrap = require('./wrap')

module.exports = wrap(
  (req, list) => req.query.byName
    ? list.filter(item => {
      const name = item.name.toLowerCase()
      const query = req.query.byName.toLowerCase()
      return name.includes(query)
    })
    : list
)
