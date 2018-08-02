import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
import Sliders from './Sliders'
import FirstRound from './FirstRound'
import SecondRound from './SecondRound'
import ThirdRound from './ThirdRound'
import FourthRound from './FourthRound'
import Winner from './Winner'
import RunSimulation from './RunSimulation'
import { basicPredict } from '../processors/predictWinner'

class Bracket extends Component {
  constructor() {
    super()
    this.state = {
      round: 1,
      teams: {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
      },
    }

    this.nextTeams = this.nextTeams.bind(this)
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`/api/teams`)
      this.setState({ teams: { ...this.state.teams, 1: data } })
    } catch (error) {
      console.log('Unable to get the teams')
      console.error(error)
    }
  }

  //gets the remaining teams, pairs the teams up and calculates
  // the new set of winners
  async nextTeams() {
    console.log(this.state.teams)
    const currentTeams = this.state.teams[this.state.round]
    let matchups = []
    let newTeams = []
    matchups[0] = [currentTeams[0], currentTeams[1]]
    for (let i = 1; i < currentTeams.length / 2; i++) {
      matchups[i] = [currentTeams[i * 2 - 1], currentTeams[i * 2]]
    }
    matchups.forEach(matchup => {
      newTeams.push(basicPredict(matchup[0], matchup[1]))
    })
    await this.setState({
      round: this.state.round + 1,
    })
    console.log(this.state.round)
    this.setState({
      teams: { ...this.state.teams, [this.state.round]: newTeams },
    })
    console.log(this.state.teams)
  }

  render() {
    return (
      <div>
        <Header />
        <RunSimulation run={this.nextTeams} />
        <main id="tournament">
          <FirstRound teams={this.state.teams[1]} />
          <SecondRound teams={this.state.teams[2]} />
          <ThirdRound teams={this.state.teams[3]} />
          <FourthRound teams={this.state.teams[4]} />
          <Winner teams={this.state.teams[5]} />
          <Sliders />
        </main>
      </div>
    )
  }
}

export default Bracket
