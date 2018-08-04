export const weightedUserValues = (teamData, userData) => {
  const scaledData = {}
  //convert user data from 1-100 to 0 - 1
  Object.keys(userData).forEach(stat => {
    scaledData[stat] = userData[stat] / 100
  })
  //apply user weights to each stat
  Object.keys(teamData).forEach(stat => {
    teamData[stat] *= scaledData[stat]
  })

  return teamData
}
