import React, { Component } from 'react'

const Team = props => {
  const team = props.team
  if (team) {
    return (
      <li style={{ color: team.color }} key={props.idx}>
        {team.seed}. {team.name} <img src={team.logoURL} />
      </li>
    )
  } else {
    return <li>TEAM</li>
  }
}

export default Team
