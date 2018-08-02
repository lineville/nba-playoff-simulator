import React, { Component } from 'react'
import Team from './Team'
import Matchup from './Matchup'

const SecondRound = props => {
  const teams = props.teams
  return (
    <ul className="round round-2">
      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[0]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[6]} />
      </li>

      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[5]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[2]} />
      </li>

      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[8]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[14]} />
      </li>

      <li className="spacer">&nbsp;</li>

      <li className="game game-top">
        <Team team={teams[12]} />
      </li>
      <li className="game game-spacer">&nbsp;</li>
      <li className="game game-bottom">
        <Team team={teams[10]} />
      </li>
      <li className="spacer">&nbsp;</li>
    </ul>
  )
}

export default SecondRound
