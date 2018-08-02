const teams = [
  {
    name: 'Rockets',
    city: 'Houston',
    conference: 'west',
    seed: 1,
    color: '#CE1141',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/houston_rockets_logo.jpg',
  },
  {
    name: 'Timberwolves',
    city: 'Minnesota',
    conference: 'west',
    seed: 8,
    color: '#0C2340',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/minnesota_timberwolves_logo.jpg',
  },
  {
    name: 'Jazz',
    city: 'Utah',
    conference: 'west',
    seed: 4,
    color: '#002B5C',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/03/utah_jazz_logo.jpg',
  },
  {
    name: 'Thunder',
    city: 'Oklahoma City',
    conference: 'west',
    seed: 5,
    color: '#007AC1',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/oklahoma_city_thunder_logo.jpg',
  },
  {
    name: 'Trail Blazers',
    city: 'Portland',
    conference: 'west',
    seed: 3,
    color: '#E03A3E',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/03/trailblazers_logo_colors.jpg',
  },
  {
    name: 'Pelicans',
    city: 'New Orleans',
    conference: 'west',
    seed: 6,
    color: '#0C2340',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/06/new_orleans_pelicans_logo.jpg',
  },
  {
    name: 'Warriors',
    city: 'Golden State',
    conference: 'west',
    seed: 2,
    color: '#006BB6',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/warriors_logo_colors.png',
  },
  {
    name: 'Spurs',
    city: 'San Antonio',
    conference: 'west',
    seed: 7,
    color: '#C4CED4',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/03/san_antonio_spurs_logo.jpg',
  },
  {
    name: 'Raptors',
    city: 'Toronto',
    conference: 'east',
    seed: 1,
    color: '#CE1141',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/03/toronto_raptors_logo.jpg',
  },
  {
    name: 'Wizards',
    city: 'Washington',
    conference: 'east',
    seed: 8,
    color: '#002B5C',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/03/washington_wizards_logo.jpg',
  },
  {
    name: 'Cavaliers',
    city: 'Cleveland',
    conference: 'east',
    seed: 4,
    color: '#6F263D',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/02/2017_cavaliers_logo.png',
  },
  {
    name: 'Pacers',
    city: 'Indiana',
    conference: 'east',
    seed: 5,
    color: '#FDBB30',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/indiana_pacers_logo.jpg',
  },
  {
    name: '76ers',
    city: 'Philadelphia',
    conference: 'east',
    seed: 3,
    color: '#006BB6',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/sixers_logo_colors-768x768.png',
  },
  {
    name: 'Heat',
    city: 'Miami',
    conference: 'east',
    seed: 6,
    color: '#98002E',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/miami_heat_logo_colors.png',
  },
  {
    name: 'Celtics',
    city: 'Boston',
    conference: 'east',
    seed: 2,
    color: '#007A33',
    logoURL:
      'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2015/02/boston_celtics_logo.jpg',
  },
  {
    name: 'Bucks',
    city: 'Milwaukee',
    conference: 'east',
    seed: 7,
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
