module.exports = function (req, res, next) {
  const oldJson = res.json
  res.json = function (list) {
    const filtered = req.query.only
      ? list.map(item => {
        const filtered = {}
        filtered[req.query.only] = item[req.query.only]
        return filtered
      }) : list
    return oldJson.call(this, filtered)
  }
  next()
}
