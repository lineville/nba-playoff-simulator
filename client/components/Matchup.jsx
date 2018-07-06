import React, { Component } from 'react'
import Team from './Team'

const Matchup = props => {
  return (
    <div className="matchup">
      <Team team={props.topTeam} />
      <Team team={props.bottomTeam} />
    </div>
  )
}

export default Matchup
