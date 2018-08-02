import React from 'react'

const Team = props => {
  const team = props.team
  if (team) {
    return (
      <div style={{ color: team.color }}>
        {team.seed}. {team.name}{' '}
        <span>
          <img src={team.logoURL} />
        </span>
      </div>
    )
  } else {
    return <div />
  }
}

export default Team
