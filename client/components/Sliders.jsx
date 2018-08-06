import React, { Component } from 'react'
import { sendUserData } from '../reducer'
import { connect } from 'react-redux'

class Sliders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      winPCT: 50,
      pointsPerGame: 50,
      assistsPerGame: 50,
      reboundsPerGame: 50,
      starPower: 50,
      history: 50,
      seed: 50,
      playerEfficiency: 50,
      homeCourt: 50,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.clear = this.clear.bind(this)
  }

  handleChange(ev) {
    this.setState({
      [ev.target.id]: Number(ev.target.value),
    })
  }

  handleSave(ev) {
    this.props.postUserData(this.state)
  }

  async clear() {
    await this.setState({
      winPCT: 50,
      pointsPerGame: 50,
      assistsPerGame: 50,
      reboundsPerGame: 50,
      starPower: 50,
      history: 50,
      seed: 50,
      playerEfficiency: 50,
      homeCourt: 50,
    })
    this.handleSave()
  }

  render() {
    return (
      <div className="card">
        <div className="sliders card-body">
          <div className="center">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <label htmlFor="winPCT">Regular Season Win Percentage</label>
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    name="winPCT"
                    id="winPCT"
                    value={this.state.winPCT}
                    onChange={this.handleChange}
                  />
                </div>
              </li>
              <li className="list-group-item">
                <label htmlFor="pointsPerGame">Points</label>
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    name="pointsPerGame"
                    id="pointsPerGame"
                    value={this.state.pointsPerGame}
                    onChange={this.handleChange}
                  />
                </div>
              </li>
              <li className="list-group-item">
                <label htmlFor="assistsPerGame">Assists</label>
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    name="assistsPerGame"
                    id="assistsPerGame"
                    value={this.state.assistsPerGame}
                    onChange={this.handleChange}
                  />
                </div>
              </li>
              <li className="list-group-item">
                <label htmlFor="reboundsPerGame">Rebounds</label>
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    name="reboundsPerGame"
                    id="reboundsPerGame"
                    value={this.state.reboundsPerGame}
                    onChange={this.handleChange}
                  />
                </div>
              </li>
              <li className="list-group-item">
                <label htmlFor="playerEfficiency">Player Efficiency</label>
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    name="playerEfficiency"
                    id="playerEfficiency"
                    value={this.state.playerEfficiency}
                    onChange={this.handleChange}
                  />
                </div>
              </li>
              <li className="list-group-item">
                <label htmlFor="seed">Seed</label>
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    name="seed"
                    id="seed"
                    value={this.state.seed}
                    onChange={this.handleChange}
                  />
                </div>
              </li>
              <li className="list-group-item">
                <label htmlFor="homeCourt">Home Court Advantage</label>
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    name="homeCourt"
                    id="homeCourt"
                    value={this.state.homeCourt}
                    onChange={this.handleChange}
                  />
                </div>
              </li>
              <li className="list-group-item">
                <label htmlFor="starPower">All Star Power</label>
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    name="starPower"
                    id="starPower"
                    value={this.state.starPower}
                    onChange={this.handleChange}
                  />
                </div>
              </li>
              <li className="list-group-item">
                <label htmlFor="history">Historical Playoff Success</label>
                <div className="slidecontainer">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    className="slider"
                    name="history"
                    id="history"
                    value={this.state.history}
                    onChange={this.handleChange}
                  />
                </div>
              </li>
            </ul>
            <button
              className="btn btn-success center"
              onClick={this.handleSave}
            >
              Save Settings
            </button>
            <button className="btn btn-danger center" onClick={this.clear}>
              Clear Settings
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  postUserData: data => dispatch(sendUserData(data)),
})

export default connect(
  null,
  mapDispatch
)(Sliders)
