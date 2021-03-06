import React, { Component } from 'react'
import { PulseLoader } from 'react-spinners'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

class TeamStats extends Component {
  constructor() {
    super()
    this.state = {}
    this.capitalizeConference = this.capitalizeConference.bind(this)
    this.winPercentage = this.winPercentage.bind(this)
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

  capitalizeConference(conference) {
    let result = '' + conference[0].toUpperCase()
    return result + conference.slice(1)
  }

  winPercentage(winPCT) {
    let result = winPCT * 100
    return result + ' %'
  }

  render() {
    const team = this.state
    if (Object.keys(team).length) {
      return (
        <div className="team-stats">
          <Header />
          <Link to="/">
            <button className="btn btn-primary">Back to Bracket</button>
          </Link>
          <h2>{team.name}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Conference: {this.capitalizeConference(team.conference)}
            </li>
            <li className="list-group-item">Seed: {team.seed}</li>
            <li className="list-group-item">
              Regular Season Win Percentage: {this.winPercentage(team.winPCT)}
            </li>
            <li className="list-group-item">
              HomeCourt Advantage Ranking: {team.homeCourt} out of 16
            </li>
            <li className="list-group-item">Star Power: {team.starPower}</li>
            <li className="list-group-item">
              Historical Playoff Success Ranking: {team.history} out of 16
            </li>
          </ul>

          <h4>Players</h4>
          <br />
          <ul className="list-group list-group-flush">
            {team.players.map(player => (
              <li key={player.id} className="list-group-item">
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
