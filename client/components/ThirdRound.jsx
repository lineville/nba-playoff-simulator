import React from 'react'
import Team from './Team'

const ThirdRound = props => {
  const teams = props.teams
  return (
    <ul className="round round-3">
      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[0]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom ">
        <Team team={teams[1]} />
      </li>

      <li className="spacer">&nbsp;</li>

      <li className="game game-top ">
        <Team team={teams[2]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[3]} />
      </li>

      <li className="spacer">&nbsp;</li>
    </ul>
  )
}

export default ThirdRound
