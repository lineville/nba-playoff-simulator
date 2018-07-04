const celtics = {
  name: 'Celtics',
  city: 'Boston',
  conference: 'east',
  seed: 2,
}

const celticsPlayers = [
  {
    name: 'Jayson Tatum',
    pointsPerGame: 13.9,
    assistsPerGame: 1.6,
    reboundsPerGame: 5.0,
    playerEfficiency: 10.8,
    allStarGames: 0,
    mvps: 0,
    teamId: celtics.id,
  },
  {
    name: 'Jaylen Brown',
    pointsPerGame: 14.5,
    assistsPerGame: 1.6,
    reboundsPerGame: 4.9,
    playerEfficiency: 8.9,
    allStarGames: 0,
    mvps: 0,
    teamId: celtics.id,
  },
]

module.exports = {
  celtics,
  celticsPlayers,
}
