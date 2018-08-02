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
      allTeams: [],
      secondRoundTeams: [],
      thirdRoundTeams: [],
      fourthFroundTeams: [],
      champ: {},
    }

    this.predictTeam = this.predictTeam.bind(this)
    this.remainingTeams = this.remainingTeams.bind(this)
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`/api/teams`)
      this.setState({ allTeams: data })
    } catch (error) {
      console.log('Unable to get the teams')
      console.error(error)
    }
  }

  remainingTeams() {
    switch (this.state.round) {
      case 1:
        return this.state.allTeams
      case 2:
        return this.state.secondRoundTeams
      case 3:
        return this.state.thirdRoundTeams
      case 4:
        return this.state.fourthFroundTeams
      default:
        return this.state.allTeams
    }
  }

  predictTeam(team1, team2) {
    const currentTeamSet = this.remainingTeams

    return basicPredict(team1, team2)
  }

  firstRoundWinner() {}

  render() {
    return (
      <div>
        <Header />
        <RunSimulation run={this.predictTeam} />
        <main id="tournament">
          <FirstRound teams={this.state.allTeams} />
          <SecondRound teams={this.state.secondRoundTeams} />
          <ThirdRound teams={this.state.thirdRoundTeams} />
          <FourthRound teams={this.state.fourthFroundTeams} />
          <Winner teams={this.state.champ} />
          <Sliders />
        </main>
      </div>
    )
  }
}

export default Bracket
