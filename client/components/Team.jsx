import React from 'react'
import { Link } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

const Team = props => {
  const { team } = props

  if (team) {
    return (
      <div style={{ color: team.color }}>
        <Link to={`/teams/${team.id}`}>
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
