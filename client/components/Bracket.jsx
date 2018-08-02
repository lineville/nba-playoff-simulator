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

  render() {
    return (
      <div>
        <Header />
        <RunSimulation />
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
