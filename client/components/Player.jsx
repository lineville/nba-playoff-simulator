import React, { Component } from 'react'
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

class Player extends Component {
  constructor() {
    super()
    this.state = {}
  }

  async componentDidMount() {
    try {
      const teamId = this.props.match.params.teamId
      const playerId = this.props.match.params.playerId
      const player = await axios.get(`/api/teams/${teamId}/${playerId}`)
      this.setState(player.data)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const player = this.state
    if (Object.keys(player).length) {
      return (
        <div className="team-stats">
          <span>
            <Link to="/">
              <button className="btn btn-outline-primary">
                Back to Bracket
              </button>
            </Link>
            <Link to={`/teams/${player.teamId}`}>
              <button className="btn btn-outline-success">Back to Team</button>
            </Link>
          </span>
          <h2>{player.name}</h2>
          <ul>
            <li>Points Per Game: {player.pointsPerGame}</li>
            <li>Assists Per Game: {player.assistsPerGame}</li>
            <li>Rebounds Per Game: {player.reboundsPerGame}</li>
            <li>Player Efficiency Rating: {player.playerEfficiency}</li>
            <li>All Star Game Appearances: {player.allStarGames}</li>
            <li>Number of MVPS or Finals MVPS: {player.mvps}</li>
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

export default withRouter(Player)
