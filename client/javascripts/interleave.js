const interleave = teams => {
  if (!teams.length) {
    return teams
  }
  return [
    teams[0],
    teams[7],
    teams[1],
    teams[6],
    teams[2],
    teams[5],
    teams[3],
    teams[4],
  ]
}

export default interleave
