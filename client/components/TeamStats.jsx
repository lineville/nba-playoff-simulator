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
          <Link to="/">
            <button className="btn btn-outline-primary">Back to Bracket</button>
          </Link>
          <h2>{team.name}</h2>
          <ul className="list-group">
            <li className="list-group-item list-group-item-success">
              Conference: {team.conference}
            </li>
            <li className="list-group-item list-group-item-danger">
              Seed: {team.seed}
            </li>
            <li className="list-group-item list-group-item-success">
              Regular Season Win Percentage: {team.winPCT}
            </li>
            <li className="list-group-item list-group-item-danger">
              HomeCourt Advantage Ranking: {team.homeCourt} out of 16
            </li>
            <li className="list-group-item list-group-item-success">
              Star Power: {team.starPower}
            </li>
            <li className="list-group-item list-group-item-danger">
              Historical Playoff Success Ranking: {team.history} out of 16
            </li>
          </ul>

          <h4>Players</h4>
          <br />
          <ul className="list-group">
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