module.exports = function (req, res, next) {
  const oldJson = res.json
  res.json = function (list) {
    const filtered = req.query.byName
      ? list.filter(item => {
        const name = item.name.toLowerCase()
        const query = req.query.byName.toLowerCase()
        return name.includes(query)
      }) : list
    return oldJson.call(this, filtered)
  }
  next()
}
