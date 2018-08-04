const individualStats = [
  'playerEfficiency',
  'pointsPerGame',
  'assistsPerGame',
  'reboundsPerGame',
]

/* {team} :: => [teamStat, teamStat ,,, playerStat, playerStat...]   */
const createDataSet = team => {
  let dataSet = {
    winPCT: team.winPCT,
    seed: 9 - team.seed,
    homeCourt: 17 - team.homeCourt,
  } //add history later

  individualStats.forEach(stat => {
    let avg = averageStat(team.players, stat)
    dataSet[stat] = avg
  })
  return dataSet
}

const averageStat = (players, stat) => {
  let total = 0
  players.forEach(player => {
    total += player[stat]
  })
  let avg = total / players.length
  return avg
}

const transform = (stat, rangeMin, rangeMax) => {
  return (stat - rangeMin) / rangeMax
}

const generateRange = (teams, stat) => {
  let min = 1000
  let max = -1000
  if (individualStats.includes(stat)) {
    teams.forEach(team => {
      team.players.forEach(player => {
        min = Math.min(player[stat], min)
        max = Math.max(player[stat], max)
      })
    })
  } else {
    teams.forEach(team => {
      min = Math.min(team[stat], min)
      max = Math.max(team[stat], max)
    })
  }
  return [min, max]
}
// takes in array and normalizes the values to 0-1
const normalizeData = (team, allTeams) => {
  let newTeam = {}
  let dataSet = createDataSet(team)

  Object.keys(dataSet).forEach(stat => {
    let range = generateRange(allTeams, stat)
    newTeam[stat] = transform(dataSet[stat], range[0], range[1])
  })
  return newTeam
}

export const comparativeValue = (team, allTeams) => {
  return normalizeData(team, allTeams)
}
