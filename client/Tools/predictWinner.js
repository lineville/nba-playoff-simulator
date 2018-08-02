import axios from 'axios'

const fetchPlayers = async team => {
  try {
    const { data } = await axios.get(`/api/teams/${team.id}`)
    return data.players
  } catch (error) {
    console.log('Could not fetch players for', team.name)
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

const averageStats = async (topTeam, bottomTeam) => {
  const topPlayers = await fetchPlayers(topTeam)
  const bottomPlayers = await fetchPlayers(bottomTeam)

  const topPointsAvg = teamAvg(topPlayers, 'pointsPerGame')
  const topAssistsAvg = teamAvg(topPlayers, 'assistsPerGame')
  const topReboundsAvg = teamAvg(topPlayers, 'reboundsPerGame')

  const bottomPointsAvg = teamAvg(bottomPlayers, 'pointsPerGame')
  const bottomAssistsAvg = teamAvg(bottomPlayers, 'assistsPerGame')
  const bottomReboundsAvg = teamAvg(bottomPlayers, 'reboundsPerGame')

  return {
    top: {
      points: topPointsAvg,
      assists: topAssistsAvg,
      rebounds: topReboundsAvg,
    },
    bottom: {
      points: bottomPointsAvg,
      assists: bottomAssistsAvg,
      rebounds: bottomReboundsAvg,
    },
  }
}

const sumOfVals = vals => {
  const topvals = Object.values(vals.top)
  const topSum = topvals.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
  const bottomvals = Object.values(vals.bottom)
  const bottomSum = bottomvals.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
  return [topSum, bottomSum]
}

const weightedValues = async (topTeam, bottomTeam, userData) => {
  const scaledData = {}
  Object.keys(userData).forEach(stat => {
    scaledData[stat] = userData[stat] / 100
  })
  console.log('scaled', scaledData)
  const vals = await averageStats(topTeam, bottomTeam)
  Object.keys(vals.top).forEach(stat => {
    vals.top[stat] *= scaledData[stat]
  })
  Object.keys(vals.bottom).forEach(stat => {
    vals.bottom[stat] *= scaledData[stat]
  })
  return vals
}

export const winner = async (topTeam, bottomTeam, userData) => {
  const values = await weightedValues(topTeam, bottomTeam, userData)
  const compVals = sumOfVals(values)
  return compVals[0] > compVals[1] ? topTeam : bottomTeam
}
