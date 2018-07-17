import React from 'react'
import Team from './Team'

const Matchup = props => {
  return (
    <div>
      <ul className="list-group">
        <Team team={props.topTeam} />
        <Team team={props.bottomTeam} />
      </ul>
    </div>
  )
}

export default Matchup
