import React from 'react'

const Team = props => {
  const team = props.team
  if (team) {
    return (
      <li
        style={{ color: team.color }}
        key={props.idx}
        className="list-group-item"
      >
        {team.seed}. {team.name} <img src={team.logoURL} />
      </li>
    )
  } else {
    return `Loading...`
  }
}

export default Team
