import React, { Component } from 'react'
import Team from './Team'
import interleave from '../javascripts/interleave'
import Matchup from './Matchup'

const Round = props => {
  const westTeams = props.teams.filter(team => team.conference === 'west')

  const eastTeams = props.teams.filter(team => team.conference === 'east')

  return (
    <div>
      <div>
        <ul className="west">
          <Matchup topTeam={westTeams[0]} bottomTeam={westTeams[7]} />
          <Matchup topTeam={westTeams[1]} bottomTeam={westTeams[6]} />
          <Matchup topTeam={westTeams[2]} bottomTeam={westTeams[5]} />
          <Matchup topTeam={westTeams[3]} bottomTeam={westTeams[4]} />
        </ul>
      </div>
      <div>
        <ul className="east">
          <Matchup topTeam={eastTeams[0]} bottomTeam={eastTeams[7]} />
          <Matchup topTeam={eastTeams[1]} bottomTeam={eastTeams[6]} />
          <Matchup topTeam={eastTeams[2]} bottomTeam={eastTeams[5]} />
          <Matchup topTeam={eastTeams[3]} bottomTeam={eastTeams[4]} />
        </ul>
      </div>
    </div>
  )
}

export default Round
