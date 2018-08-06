const Sequelize = require('sequelize')
const local = `postgres://localhost:5432/playoffs`

const db = new Sequelize(process.env.HEROKU_POSTGRESQL_GRAY_URL || local, {
  logging: false,
  operatorsAliases: false,
})
module.exports = db
