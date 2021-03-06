const teams = [
  {
    name: 'Rockets',
    city: 'Houston',
    conference: 'west',
    seed: 1,
    homeCourt: 9,
    winPCT: 0.793,
    starPower: 20,
    history: 4,
    color: '#',
    logoURL: '/images/rockets.png',
  },
  {
    name: 'Timberwolves',
    city: 'Minnesota',
    conference: 'west',
    seed: 8,
    homeCourt: 16,
    winPCT: 0.573,
    starPower: 10,
    history: 16,
    color: '#1172a6',
    logoURL: '/images/timberwolves.png',
  },
  {
    name: 'Jazz',
    city: 'Utah',
    conference: 'west',
    seed: 4,
    homeCourt: 7,
    winPCT: 0.585,
    starPower: 0,
    history: 9,
    color: '#44f2e4',
    logoURL: '/images/jazz.png',
  },
  {
    name: 'Thunder',
    city: 'Oklahoma City',
    conference: 'west',
    seed: 5,
    homeCourt: 1,
    winPCT: 0.585,
    starPower: 23,
    history: 7,
    color: '#007AC1',
    logoURL: '/images/thunder.png',
  },
  {
    name: 'Trail Blazers',
    city: 'Portland',
    conference: 'west',
    seed: 3,
    homeCourt: 4,
    winPCT: 0.598,
    starPower: 3,
    history: 11,
    color: '#E03A3E',
    logoURL: '/images/trailblazers.png',
  },
  {
    name: 'Pelicans',
    city: 'New Orleans',
    conference: 'west',
    seed: 6,
    homeCourt: 15,
    winPCT: 0.585,
    starPower: 10,
    history: 15,
    color: '#1a0dab',
    logoURL: '/images/pelicans.png',
  },
  {
    name: 'Warriors',
    city: 'Golden State',
    conference: 'west',
    seed: 2,
    homeCourt: 2,
    winPCT: 0.707,
    starPower: 28,
    history: 8,
    color: '#006BB6',
    logoURL: '/images/warriors.png',
  },
  {
    name: 'Spurs',
    city: 'San Antonio',
    conference: 'west',
    seed: 7,
    homeCourt: 8,
    winPCT: 0.573,
    starPower: 18,
    history: 1,
    color: '#ababab',
    logoURL: '/images/spurs.png',
  },
  {
    name: 'Raptors',
    city: 'Toronto',
    conference: 'east',
    seed: 1,
    homeCourt: 5,
    winPCT: 0.72,
    starPower: 8,
    history: 13,
    color: '#CE1141',
    logoURL: '/images/raptors.png',
  },
  {
    name: 'Wizards',
    city: 'Washington',
    conference: 'east',
    seed: 8,
    homeCourt: 13,
    winPCT: 0.524,
    starPower: 6,
    history: 14,
    color: '#1230db',
    logoURL: '/images/wizards.png',
  },
  {
    name: 'Cavaliers',
    city: 'Cleveland',
    conference: 'east',
    seed: 4,
    homeCourt: 3,
    winPCT: 0.61,
    starPower: 27,
    history: 6,
    color: '#6F263D',
    logoURL: '/images/cavaliers.png',
  },
  {
    name: 'Pacers',
    city: 'Indiana',
    conference: 'east',
    seed: 5,
    homeCourt: 10,
    winPCT: 0.585,
    starPower: 1,
    history: 10,
    color: '#FDBB30',
    logoURL: '/images/pacers.png',
  },
  {
    name: '76ers',
    city: 'Philadelphia',
    conference: 'east',
    seed: 3,
    homeCourt: 12,
    winPCT: 0.634,
    starPower: 1,
    history: 5,
    color: '#006BB6',
    logoURL: '/images/sixers.png',
  },
  {
    name: 'Heat',
    city: 'Miami',
    conference: 'east',
    seed: 6,
    homeCourt: 11,
    winPCT: 0.537,
    starPower: 15,
    history: 3,
    color: '#98002E',
    logoURL: '/images/heat.png',
  },
  {
    name: 'Celtics',
    city: 'Boston',
    conference: 'east',
    seed: 2,
    homeCourt: 6,
    winPCT: 0.671,
    starPower: 5,
    history: 2,
    color: '#007A33',
    logoURL: '/images/celtics.png',
  },
  {
    name: 'Bucks',
    city: 'Milwaukee',
    conference: 'east',
    seed: 7,
    homeCourt: 14,
    winPCT: 0.537,
    starPower: 2,
    history: 12,
    color: '#00782c',
    logoURL: '/images/bucks.png',
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
