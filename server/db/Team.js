const Sequelize = require('sequelize')
const db = require('./db')

const Team = db.define({
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  seed: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = Team
