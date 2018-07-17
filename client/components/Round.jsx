import React, { Component } from 'react'
import Matchup from './Matchup'
import { connect } from 'react-redux'
import { fetchTeams } from '../reducer'

class Round extends Component {
  async componentDidMount() {
    await this.props.loadTeams()
  }
  render() {
    console.log('teams', this.props.teams)
    const westTeams = this.props.teams.filter(
      team => team.conference === 'west'
    )
    const eastTeams = this.props.teams.filter(
      team => team.conference === 'east'
    )
    return (
      <div>
        <div>
          <h4>Western Conference</h4>
          <ul className="west">
            <Matchup topTeam={westTeams[0]} bottomTeam={westTeams[1]} />
            <Matchup topTeam={westTeams[2]} bottomTeam={westTeams[3]} />
            <Matchup topTeam={westTeams[4]} bottomTeam={westTeams[5]} />
            <Matchup topTeam={westTeams[6]} bottomTeam={westTeams[7]} />
          </ul>
        </div>
        <div>
          <h4>Eastern Conference</h4>
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
}

const mapState = state => ({
  teams: state.teams,
})

const mapDispatch = dispatch => ({
  loadTeams: () => dispatch(fetchTeams()),
})

export default connect(
  mapState,
  mapDispatch
)(Round)
