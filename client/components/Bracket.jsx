import React, { Component } from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import FirstRound from './FirstRound'

export default class Bracket extends Component {
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
          <Header />
          <FirstRound
            teams={this.state.teams}
            currentRound={this.currentRound}
          />
        </div>
      </Router>
    )
  }
}
