import React, { Component } from 'react'
import { PulseLoader } from 'react-spinners'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'

class TeamStats extends Component {
  constructor() {
    super()
    this.state = {}
  }

  async componentDidMount() {
    try {
      const team = await axios.get(
        `/api/teams/${this.props.match.params.teamId}`
      )
      this.setState(team.data)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const team = this.state
    console.log(this.state)
    if (Object.keys(team).length) {
      return (
        <div className="team-stats">
          <h2>{team.name}</h2>
          <ul>
            <li>Conference: {team.conference}</li>
            <li>Seed: {team.seed}</li>
            <li>Regular Season Win Percentage: {team.winPCT}</li>
            <li>HomeCourt Advantage Ranking: {team.homeCourt} out of 16</li>
            <li>Star Power: {team.starPower}</li>
            <li>
              Historical Playoff Success Ranking: {team.history} out of 16
            </li>
          </ul>

          <h3>Players</h3>
          <br />
          <ul>
            {team.players.map(player => (
              <li key={player.id}>
                <Link to={`/teams/${team.id}/${player.id}`}>{player.name}</Link>
              </li>
            ))}
          </ul>
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
}

export default withRouter(TeamStats)
