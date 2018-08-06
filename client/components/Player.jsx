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
              <button className="btn btn-primary">Back to Bracket</button>
            </Link>
            <Link to={`/teams/${player.teamId}`}>
              <button className="btn btn-default">Back to Team</button>
            </Link>
          </span>
          <h2>{player.name}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item list-group-item-success">
              Points Per Game: {player.pointsPerGame}
            </li>
            <li className="list-group-item list-group-item-danger">
              Assists Per Game: {player.assistsPerGame}
            </li>
            <li className="list-group-item list-group-item-success">
              Rebounds Per Game: {player.reboundsPerGame}
            </li>
            <li className="list-group-item list-group-item-danger">
              Player Efficiency Rating: {player.playerEfficiency}
            </li>
            <li className="list-group-item list-group-item-success">
              All Star Game Appearances: {player.allStarGames}
            </li>
            <li className="list-group-item list-group-item-danger">
              Number of MVPs or Finals MVPs: {player.mvps}
            </li>
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
