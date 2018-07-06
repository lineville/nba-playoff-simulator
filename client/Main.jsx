import React, { Component } from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import axios from 'axios'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      currentRound: 1,
      teams: [],
      // will need to store the data from the sliders
    }
  }

  //Component did mount should render the round 1 bracket
  async componentDidMount() {
    const teams = await axios.get(`/api/teams/`)
    console.log(teams)
    this.setState({ teams: teams.data })
  }
  render() {
    // Should render the full bracket and form component
    return (
      <Router>
        <div>
          <h1 className="text-center">2018 NBA Playoffs Simulator!</h1>
          <div>
            <ul>
              {this.state.teams.map((team, idx) => (
                <li style={{ color: team.color }} key={idx}>
                  {team.seed}. {team.name} <img src={team.logoURL} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Router>
    )
  }
}
