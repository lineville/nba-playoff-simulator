import React from 'react'
import { PulseLoader } from 'react-spinners'

const Team = props => {
  const { team } = props

  if (team) {
    return (
      <div style={{ color: team.color }}>
        {team.originalSeed}. {team.name}{' '}
        <span>
          <img src={team.logoURL} />
        </span>
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
