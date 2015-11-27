module.exports = function (req, res, next) {
  const oldJson = res.json
  res.json = function (list) {
    const sorted = req.query.sorted
      ? list.sort((a, b) => {
        return a.name.localeCompare(b.name)
      }) : list
    return oldJson.call(this, sorted)
  }
  next()
}
