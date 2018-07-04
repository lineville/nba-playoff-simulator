const PORT = 8080
const server = require('./index')
const { db } = require('./db/index')

db.sync().then(() => {
  server.listen(PORT, () =>
    console.log(`
        ~~~~~~~~~~~~~~~~~~~~~~~~~
        ----NBA Simulator App----

        Listening on port ${PORT}

        http://localhost:${PORT}/

        ~~~~~~~~~~~~~~~~~~~~~~~~~~

    `))
})
