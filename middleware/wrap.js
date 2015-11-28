module.exports = action => (req, res, next) => {
  const oldJson = res.json
  res.json = function (list) {
    return oldJson.call(this, action(req, list))
  }
  next()
}
