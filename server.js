const app = require('./app.js')
const port = process.env.PORT || 12345
app.listen(port)
console.log(`Ready on port ${ port }`)
