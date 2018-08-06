import React from 'react'
import { Link } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

const Team = props => {
  const { team } = props
  if (team) {
    return (
      <div className="team">
        <Link to={`/teams/${team.id}`} style={{ color: team.color }}>
          {team.originalSeed}. {team.name}{' '}
          <span>
            <img src={team.logoURL} />
          </span>
        </Link>
      </div>
    )
  } else {
    return (
      <div className="sweet-loading">
        <PulseLoader color="#33DDDD" loading={true} />
      </div>
    )
  }
}

export default Team
