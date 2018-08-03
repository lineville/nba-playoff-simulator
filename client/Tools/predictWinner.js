export const weightedUserValues = (team, userData) => {
  const scaledData = {}
  let players = team.players
  //convert user data from 1-100 to 0 - 1
  Object.keys(userData).forEach(stat => {
    scaledData[stat] = userData[stat] / 100
  })
  //apply user weights to each stat
  players.forEach(stat => {
    players[stat] *= scaledData[stat]
  })
  //apply user weights to team stats
  team.seed = (9 - team.seed) * scaledData.seed
  team.regSeason = team.regSeason * scaledData.regSeason
  team.homeCourt = team.homeCourt * scaledData.homeCourt

  return team
}
