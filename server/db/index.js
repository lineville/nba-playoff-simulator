const Sequelize = require('sequelize')
const db = require('./db')
// Require in the models
const Player = require('./Player')
const Team = require('./Team')
//Associations go here
Player.belongsTo(Team)
Team.hasMany(Player)
module.exports = db
