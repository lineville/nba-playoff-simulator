import React from 'react'

const Team = props => {
  const team = props.team
  if (team) {
    return (
      <li style={{ color: team.color }} className="game game-top winner">
        {team.seed}. {team.name} <img src={team.logoURL} />
      </li>
    )
  } else {
    return `Loading...`
  }
}

export default Team
