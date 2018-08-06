// import axios from 'axios'
import { monteCarloValues } from './randomizer'
import { weightedUserValues } from './userInput'
import { comparativeValue } from './condense'

/*
-Fetch both teams
-process the player data through monteCarlo sim
-reconstruct the teams
-pass the teams through the user weights
-generate a single comparative value
-return winning team obj
*/
export const winner = (topTeam, bottomTeam, userData, allTeams) => {
  console.log('Initial team data', topTeam)
  let topPlayers = monteCarloValues(topTeam.players)
  let bottomPlayers = monteCarloValues(bottomTeam.players)

  console.log('Data after randomization', topTeam)
  topTeam = { ...topTeam, players: topPlayers }
  bottomTeam = { ...bottomTeam, players: bottomPlayers }

  const normalizedDataTop = comparativeValue(topTeam, allTeams)
  const normalizedDataBottom = comparativeValue(bottomTeam, allTeams)

  console.log('Data after proportional scaling', weightedTop)
  const weightedTop = weightedUserValues(normalizedDataTop, userData)
  const weightedBottom = weightedUserValues(normalizedDataBottom, userData)

  const topTotalVal = Object.values(weightedTop).reduce((val, acc) => val + acc)
  const bottomTotalVal = Object.values(weightedBottom).reduce(
    (val, acc) => val + acc
  )
  console.log('Condensed comparative value', topTotalVal)
  return topTotalVal > bottomTotalVal ? topTeam : bottomTeam
}
