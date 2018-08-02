import axios from 'axios'

const fetchPlayers = async team => {
  try {
    const { data } = await axios.get(`/api/teams/${team.id}`)
    return data.players
  } catch (error) {
    console.error(error)
  }
}

const teamAvg = (players, statCol) => {
  let total = 0
  players.forEach(player => {
    total += player[statCol]
  })
  return total / players.length
}

export const basicPredict = async (topTeam, bottomTeam) => {
  const topPlayers = await fetchPlayers(topTeam)
  const bottomPlayers = await fetchPlayers(bottomTeam)

  const topPointsAvg = teamAvg(topPlayers, 'pointsPerGame')
  const topAssistsAvg = teamAvg(topPlayers, 'assistsPerGame')
  const topReboundsAvg = teamAvg(topPlayers, 'reboundsPerGame')
  const topVal = topPointsAvg + topAssistsAvg + topReboundsAvg

  const bottomPointsAvg = teamAvg(bottomPlayers, 'pointsPerGame')
  const bottomAssistsAvg = teamAvg(bottomPlayers, 'assistsPerGame')
  const bottomReboundsAvg = teamAvg(bottomPlayers, 'reboundsPerGame')
  const bottomVal = bottomPointsAvg + bottomAssistsAvg + bottomReboundsAvg

  return topVal > bottomVal ? topTeam : bottomTeam
}
