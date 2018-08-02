import React from 'react'
import Team from './Team'

const Winner = props => {
  return (
    <ul className="round round-5">
      <li className="spacer">&nbsp;</li>
      <li className="game game-champion winner-bottom">
        <Team team={props.teams[0]} />
      </li>
      <li className="spacer">&nbsp;</li>
    </ul>
  )
}

export default Winner
