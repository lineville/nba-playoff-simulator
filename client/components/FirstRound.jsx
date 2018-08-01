import React, { Component } from 'react'
import Team from './Team'

const FirstRound = props => {
  const teams = props.teams
  return (
    <ul className="round round-1">
      <li className="spacer">&nbsp;</li>
      {teams.map(team => (
        <div key={team.id}>
          <Team team={team} />
          <li className="game game-spacer">&nbsp;</li>
        </div>
      ))}
      <li className="spacer">&nbsp;</li>
    </ul>
  )
}

export default FirstRound
