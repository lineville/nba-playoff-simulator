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
export const winner = (topTeam, bottomTeam, userData) => {
  // let topPlayers = await fetchPlayers(topTeam) //fetching
  // let bottomPlayers = await fetchPlayers(bottomTeam)

  let topPlayers = monteCarloValues(topTeam.players) //random process
  let bottomPlayers = monteCarloValues(bottomTeam.players)
  console.log(topTeam)
  topTeam = { ...topTeam, players: topPlayers } //reconstruct
  bottomTeam = { ...bottomTeam, players: bottomPlayers }

  topTeam = weightedUserValues(topTeam, userData)
  bottomTeam = weightedUserValues(bottomTeam, userData)

  console.log('top', topTeam, 'bottom', bottomTeam)
  return comparativeValue(topTeam, bottomTeam)
}
