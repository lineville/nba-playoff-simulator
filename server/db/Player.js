const Sequelize = require('sequelize')
const db = require('./db')

const Player = db.define('player', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pointsPerGame: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  assistsPerGame: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  reboundsPerGame: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  playerEfficiency: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  allStarGames: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  mvps: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = Player
