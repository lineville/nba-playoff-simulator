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
    color: '#CE1141',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/houston_rockets_logo.jpg',
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
    color: '#0C2340',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/minnesota_timberwolves_logo.jpg',
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
    color: '#002B5C',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/03/utah_jazz_logo.jpg',
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
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/oklahoma_city_thunder_logo.jpg',
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
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/03/trailblazers_logo_colors.jpg',
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
    color: '#0C2340',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/06/new_orleans_pelicans_logo.jpg',
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
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/warriors_logo_colors.png',
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
    color: '#000000',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/03/san_antonio_spurs_logo.jpg',
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
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/03/toronto_raptors_logo.jpg',
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
    color: '#002B5C',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/03/washington_wizards_logo.jpg',
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
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/02/2017_cavaliers_logo.png',
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
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/indiana_pacers_logo.jpg',
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
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/sixers_logo_colors-768x768.png',
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
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/miami_heat_logo_colors.png',
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
    logoURL: 'celtics.png',
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
    color: '#00471B',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/milwaukee_bucks_logo.jpg',
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
