import axios from 'axios'
import { monteCarloValues } from './randomizer'

const fetchPlayers = async team => {
  try {
    const { data } = await axios.get(`/api/teams/${team.id}`)
    return data.players
  } catch (error) {
    console.log('Could not fetch players for', team)
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
  const topPlayerEfficiency = teamAvg(topPlayers, 'playerEfficiency')

  const bottomPointsAvg = teamAvg(bottomPlayers, 'pointsPerGame')
  const bottomAssistsAvg = teamAvg(bottomPlayers, 'assistsPerGame')
  const bottomReboundsAvg = teamAvg(bottomPlayers, 'reboundsPerGame')
  const bottomPlayerEfficiency = teamAvg(bottomPlayers, 'playerEfficiency')

  return {
    top: {
      points: topPointsAvg,
      assists: topAssistsAvg,
      rebounds: topReboundsAvg,
      playerEfficiency: topPlayerEfficiency,
    },
    bottom: {
      points: bottomPointsAvg,
      assists: bottomAssistsAvg,
      rebounds: bottomReboundsAvg,
      playerEfficiency: bottomPlayerEfficiency,
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
  //convert user data from 1-100 to 0 - 1
  const scaledData = {}
  topTeam = await monteCarloValues(topTeam)
  bottomTeam = await monteCarloValues(bottomTeam)
  Object.keys(userData).forEach(stat => {
    scaledData[stat] = userData[stat] / 100
  })
  // get averages for pts, assts, rebs for both teams
  const vals = await averageStats(topTeam, bottomTeam)
  //scale the values by userInput
  Object.keys(vals.top).forEach(stat => {
    vals.top[stat] *= scaledData[stat]
  })
  Object.keys(vals.bottom).forEach(stat => {
    vals.bottom[stat] *= scaledData[stat]
  })
  vals.top.seed = (9 - topTeam.seed) * scaledData.seed
  vals.bottom.seed = (9 - bottomTeam.seed) * scaledData.seed
  return vals
}

export const winner = async (topTeam, bottomTeam, userData) => {
  const values = await weightedValues(topTeam, bottomTeam, userData)
  const compVals = sumOfVals(values)
  return compVals[0] > compVals[1] ? topTeam : bottomTeam
}
