import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Header from './Header'
import Sliders from './Sliders'
import FirstRound from './FirstRound'
import SecondRound from './SecondRound'
import ThirdRound from './ThirdRound'
import FourthRound from './FourthRound'
import Winner from './Winner'
import RunSimulation from './RunSimulation'
import { basicPredict } from '../predictWinner'

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
      userData: {
        regSeason: 50,
        points: 50,
        assists: 50,
        rebounds: 50,
        allstar: 50,
        history: 50,
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
    const currentTeams = this.state.teams[this.state.round]
    let matchups = []
    let newTeams = []
    matchups[0] = [currentTeams[0], currentTeams[1]]
    for (let i = 1; i < currentTeams.length / 2; i++) {
      matchups[i] = [currentTeams[i * 2], currentTeams[i * 2 + 1]]
    }
    matchups.forEach(matchup => {
      const winner = basicPredict(matchup[0], matchup[1])
      newTeams.push(winner)
    })
    newTeams = await Promise.all(newTeams)
    console.log(newTeams)
    await this.setState({
      round: this.state.round + 1,
    })
    this.setState({
      teams: { ...this.state.teams, [this.state.round]: newTeams },
    })
  }

  render() {
    return (
      <div>
        <Header />
        <RunSimulation />
        <main id="tournament">
          <FirstRound teams={this.state.teams[1]} />
          <SecondRound teams={this.state.teams[2]} />
          <ThirdRound teams={this.state.teams[3]} />
          <FourthRound teams={this.state.teams[4]} />
          <Winner teams={this.state.teams[5]} />
          <Sliders nextTeams={this.nextTeams} />
        </main>
      </div>
    )
  }
}

const mapState = state => ({
  userData: state.userData,
})

export default connect(mapState)(Bracket)