import React from 'react'

const Team = props => {
  const team = props.team
  if (team) {
    return (
      <li style={{ color: team.color }}>
        {team.seed}. {team.name}{' '}
        <span>
          <img src={team.logoURL} />
        </span>
      </li>
    )
  } else {
    return `Loading...`
  }
}

export default Team
