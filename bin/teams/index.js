const teams = [
  {
    name: 'Raptors',
    city: 'Toronto',
    conference: 'east',
    seed: 1,
  },
  {
    name: 'Celtics',
    city: 'Boston',
    conference: 'east',
    seed: 2,
  },
  {
    name: '76ers',
    city: 'Philadelphia',
    conference: 'east',
    seed: 3,
  },
  {
    name: 'Cavaliers',
    city: 'Cleveland',
    conference: 'east',
    seed: 4,
  },
  {
    name: 'Pacers',
    city: 'Indiana',
    conference: 'east',
    seed: 5,
  },
  {
    name: 'Heat',
    city: 'Miami',
    conference: 'east',
    seed: 6,
  },
  {
    name: 'Bucks',
    city: 'Milwaukee',
    conference: 'east',
    seed: 7,
  },
  {
    name: 'Wizards',
    city: 'Washington',
    conference: 'east',
    seed: 8,
  },
  {
    name: 'Rockets',
    city: 'Houston',
    conference: 'west',
    seed: 1,
  },
  {
    name: 'Warriors',
    city: 'Golden State',
    conference: 'west',
    seed: 2,
  },
  {
    name: 'TrailBlazers',
    city: 'Portland',
    conference: 'west',
    seed: 3,
  },
  {
    name: 'Jazz',
    city: 'Utah',
    conference: 'west',
    seed: 4,
  },
  {
    name: 'Thunder',
    city: 'Oklahoma City',
    conference: 'west',
    seed: 5,
  },
  {
    name: 'Pelicans',
    city: 'New Orleans',
    conference: 'west',
    seed: 6,
  },
  {
    name: 'Spurs',
    city: 'San Antonio',
    conference: 'west',
    seed: 7,
  },
  {
    name: 'Timberwolves',
    city: 'Minnesota',
    conference: 'west',
    seed: 8,
  },
]

const raptorsPlayers = require('./raptors')
const celticsPlayers = require('./celtics')
const sixersPlayers = require('./sixers')
const cavaliersPlayers = require('./cavaliers')
const pacersPlayers = require('./pacers')
const heatPlayers = require('./heat')
const bucksPlayers = require('./bucks')
const wizardsPlayers = require('./wizards')
const rocketsPlayers = require('./rockets')
const warriorsPlayers = require('./warriors')
const trailblazersPlayers = require('./trailblazers')
const jazzPlayers = require('./jazz')
const thunderPlayers = require('./thunder')
const pelicansPlayers = require('./pelicans')
const spursPlayers = require('./spurs')
const timberwolvesPlayers = require('./timberwolves')
const allPlayers = raptorsPlayers.concat(
  celticsPlayers,
  sixersPlayers,
  cavaliersPlayers,
  pacersPlayers,
  heatPlayers,
  bucksPlayers,
  wizardsPlayers,
  rocketsPlayers,
  warriorsPlayers,
  trailblazersPlayers,
  jazzPlayers,
  thunderPlayers,
  pelicansPlayers,
  spursPlayers,
  timberwolvesPlayers
)
module.exports = {
  teams,
  allPlayers,
}
