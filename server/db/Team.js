const Sequelize = require('sequelize')
const db = require('./db')

const Team = db.define('team', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  conference: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  seed: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = Team