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
import { winner } from '../Tools'
import { getUserData } from '../reducer'
import { HashLoader } from 'react-spinners'

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
      loading: false,
    }

    this.nextTeams = this.nextTeams.bind(this)
    this.reset = this.reset.bind(this)
    this.toggleSpinner = this.toggleSpinner.bind(this)
  }

  toggleSpinner() {
    this.setState({
      loading: !this.state.loading,
    })
    console.log(this.state.loading)
  }

  async componentDidMount() {
    this.props.loadUserData()
    try {
      const { data } = await axios.get(`/api/teams`)
      let allTeams = data.sort(function(a, b) {
        return a.id - b.id
      })
      //stash the original seeds for display
      allTeams.forEach(team => {
        team.originalSeed = team.seed
      })
      this.setState({ teams: { ...this.state.teams, 1: allTeams } })
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

    // WINNERS COMPUTED HERE
    matchups.forEach(matchup => {
      const winningTeam = winner(
        matchup[0],
        matchup[1],
        this.props.userData,
        this.state.teams[1]
      )
      newTeams.push(winningTeam)
    })
    await this.setState({
      round: this.state.round + 1,
    })
    this.setState({
      teams: { ...this.state.teams, [this.state.round]: newTeams },
    })
  }

  reset() {
    this.setState({
      round: 1,
      teams: {
        1: this.state.teams[1],
        2: [],
        3: [],
        4: [],
        5: [],
      },
    })
  }

  render() {
    return (
      <div>
        <Header />
        <RunSimulation onClick={this.toggleSpinner} run={this.nextTeams} />
        <HashLoader color="#123abc" loading={this.state.loading} />
        <button className="btn btn-outline-warning center" onClick={this.reset}>
          Reset
        </button>
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

const mapState = state => ({
  userData: state,
})

const mapDispatch = dispatch => ({
  loadUserData: () => dispatch(getUserData()),
})

export default connect(
  mapState,
  mapDispatch
)(Bracket)
