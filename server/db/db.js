const Sequelize = require('sequelize')

const dbName = 'playoffs' + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`,
  {
    logging: false,
    operatorsAliases: false,
  }
)
module.exports = db
