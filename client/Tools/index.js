// import axios from 'axios'
import { monteCarloValues } from './randomizer'
import { weightedUserValues } from './predictWinner'

// const fetchPlayers = async team => {
//   try {
//     const { data } = await axios.get(`/api/teams/${team.id}`)
//     return data.players
//   } catch (error) {
//     console.log('Could not fetch players for', team)
//     console.error(error)
//   }
// }

/*
-Fetch both teams
-process the player data through monteCarlo sim
-reconstruct the teams
-pass the teams through the user weights
-generate a single comparative value
-return winning team obj
*/
export const winner = async (topTeam, bottomTeam, userData) => {
  // let topPlayers = await fetchPlayers(topTeam) //fetching
  // let bottomPlayers = await fetchPlayers(bottomTeam)

  let topPlayers = monteCarloValues(topTeam.players) //random process
  let bottomPlayers = monteCarloValues(bottomTeam.players)

  topTeam = { ...topTeam, players: topPlayers } //reconstruct
  bottomTeam = { ...bottomTeam, players: bottomPlayers }

  topTeam = weightedUserValues(topTeam, userData)
  bottomTeam = weightedUserValues(bottomTeam, userData)

  console.log('top', topTeam)
  return topTeam
}
