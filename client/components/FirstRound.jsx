import React, { Component } from 'react'
import Team from './Team'
import Matchup from './Matchup'

const Round = props => {
  const westTeams = props.teams.filter(team => team.conference === 'west')

  const eastTeams = props.teams.filter(team => team.conference === 'east')

  return (
    <div>
      <div>
        <ul className="west">
          <Matchup topTeam={westTeams[0]} bottomTeam={westTeams[1]} />
          <Matchup topTeam={westTeams[2]} bottomTeam={westTeams[3]} />
          <Matchup topTeam={westTeams[4]} bottomTeam={westTeams[5]} />
          <Matchup topTeam={westTeams[6]} bottomTeam={westTeams[7]} />
        </ul>
      </div>
      <div>
        <ul className="east">
          <Matchup topTeam={eastTeams[0]} bottomTeam={eastTeams[1]} />
          <Matchup topTeam={eastTeams[2]} bottomTeam={eastTeams[3]} />
          <Matchup topTeam={eastTeams[4]} bottomTeam={eastTeams[5]} />
          <Matchup topTeam={eastTeams[6]} bottomTeam={eastTeams[7]} />
        </ul>
      </div>
    </div>
  )
}

export default Round
