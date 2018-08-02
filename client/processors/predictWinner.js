export const basicPredict = (topTeam, bottomTeam) => {
  return topTeam.seed > bottomTeam.seed ? bottomTeam : topTeam
}
