const PORT = 8080
const server = require('.')
const { db } = require('./db')

db.sync().then(() => {
  server.listen(PORT, () =>
    console.log(`
        |~~~~~~~~~~~~~~~~~~~~~~~~~|
        |-----NBA Simulator App---|
        |                         |
        |Listening on port ${PORT}|
        |                         |
        http://localhost:${PORT}/
        |                         |
        |~~~~~~~~~~~~~~~~~~~~~~~~~|

    `))
})
