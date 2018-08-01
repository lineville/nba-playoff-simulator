import React from 'react'
import Team from './Team'

const Matchup = props => {
  return (
    <div>
      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={props.topTeam} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={props.bottomTeam} />
      </li>
    </div>
  )
}

export default Matchup
