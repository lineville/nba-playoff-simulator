import React from 'react'
import Team from './Team'

const FourthRound = props => {
  const teams = props.teams
  return (
    <ul className="round round-4">
      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[2]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom ">
        <Team team={teams[14]} />
      </li>

      <li className="spacer">&nbsp;</li>
    </ul>
  )
}

export default FourthRound
