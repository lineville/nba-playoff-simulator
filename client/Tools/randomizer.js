const NUM_SIMULATIONS = 10000

const randomValue = (stat, type) => {
  let simulatedVals = []
  let max, min
  switch (type) {
    case 'points':
      max = stat + 15
      min = stat - 10 < 0 ? 0 : stat - 10
      break
    case 'assists':
      max = stat + 3
      min = stat - 3 < 0 ? 0 : stat - 3
      break
    case 'rebounds':
      max = stat + 5
      min = stat - 2 < 0 ? 0 : stat - 2
      break
    case 'efficiency':
      max = stat + 1.5
      min = stat - 1 < 0 ? 0 : stat - 1
      break
    default:
      min = max = stat
  }
  for (let i = 0; i < NUM_SIMULATIONS; i++) {
    let rand = Math.random() * (max - min) + min
    simulatedVals.push(rand)
  }
  return simulatedVals.reduce((val, acc) => val + acc, 0) / NUM_SIMULATIONS
}

export const monteCarloValues = players => {
  const newPlayers = []
  players.forEach(player => {
    let newPlayer = {
      ...player,
      pointsPerGame: randomValue(player.pointsPerGame, 'points'),
      assistsPerGame: randomValue(player.pointsPerGame, 'assists'),
      reboundsPerGame: randomValue(player.pointsPerGame, 'rebounds'),
      playerEfficiency: randomValue(player.playerEfficiency, 'efficiency'),
    }
    newPlayers.push(newPlayer)
  })
  return newPlayers
}
