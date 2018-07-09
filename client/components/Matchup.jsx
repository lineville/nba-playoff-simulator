import React, { Component } from 'react'
import Team from './Team'

const Matchup = props => {
  return (
    <div className="matchup">
      <ul className="list-group">
        <Team team={props.topTeam} />
        <Team team={props.bottomTeam} />
      </ul>
    </div>
  )
}

export default Matchup
