const Sequelize = require('sequelize')
const local = `postgres://localhost:5432/playoffs`

const db = new Sequelize(
  `postgres://fnvubvblysiwsx:5f2ad2063da26af2042dee4fc081c05e56275a1a1e434bacc26e02f1d35fb69b@ec2-54-235-212-58.compute-1.amazonaws.com:5432/d1tgm18gmk1c1`,
  {
    logging: false,
    operatorsAliases: false,
  }
)
module.exports = db
