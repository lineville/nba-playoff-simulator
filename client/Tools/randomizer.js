import axios from 'axios'

const fetchPlayers = async team => {
  try {
    const { data } = await axios.get(`/api/teams/${team.id}`)
    return data.players
  } catch (error) {
    console.log('Could not fetch players for', team)
    console.error(error)
  }
}

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
  for (let i = 0; i < 10000; i++) {
    let rand = Math.random() * (max - min) + min
    simulatedVals.push(rand)
  }
  return simulatedVals.reduce((val, acc) => val + acc, 0) / 1000
}

export const monteCarloValues = async team => {
  const players = await fetchPlayers(team)
  const newPlayers = []
  players.forEach(async player => {
    let newPlayer = {
      pointsPerGame: await randomValue(player.pointsPerGame, 'points'),
      assistsPerGame: await randomValue(player.pointsPerGame, 'assists'),
      reboundsPerGame: await randomValue(player.pointsPerGame, 'rebounds'),
      playerEfficiency: await randomValue(
        player.playerEfficiency,
        'efficiency'
      ),
    }
    console.log('old', player, 'new', newPlayer)
    newPlayers.push(newPlayer)
  })
  return { ...team, players: newPlayers }
}
