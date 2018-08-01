import React from 'react'
import Matchup from './Matchup'

const FirstRound = props => {
  const teams = props.teams
  return (
    <ul className="round round-1">
      <Matchup topTeam={teams[0]} bottomTeam={teams[1]} />
      <Matchup topTeam={teams[2]} bottomTeam={teams[3]} />
      <Matchup topTeam={teams[4]} bottomTeam={teams[5]} />
      <Matchup topTeam={teams[6]} bottomTeam={teams[7]} />
      <Matchup topTeam={teams[8]} bottomTeam={teams[9]} />
      <Matchup topTeam={teams[10]} bottomTeam={teams[11]} />
      <Matchup topTeam={teams[12]} bottomTeam={teams[13]} />
      <Matchup topTeam={teams[14]} bottomTeam={teams[15]} />

      <li className="spacer">&nbsp;</li>
    </ul>
  )
}

export default FirstRound
