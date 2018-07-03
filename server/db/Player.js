const Sequelize = require('sequelize')
const db = require('./db')

const Player = db.define('player', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pointsPerGame: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  assistsPerGame: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  reboundsPerGame: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  playoffExperience: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = Player
