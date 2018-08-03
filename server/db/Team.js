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
  homeCourt: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  winPCT: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  logoURL: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = Team
