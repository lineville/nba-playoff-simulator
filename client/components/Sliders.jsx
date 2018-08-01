import React, { Component } from 'react'
import { Slider, InputNumber, Row, Col, Label } from 'antd'

class Sliders extends Component {
  state = {
    inputValue: 1,
  }

  onChange = value => {
    this.setState({
      inputValue: value,
    })
  }

  render() {
    return (
      <div>
        <Row className="slider-row">
          <Slider
            min={0}
            max={100}
            id="slider"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
        </Row>
        <Label htmlFor="slider">Playoff Experience</Label>
        <Row className="slider-row">
          <Slider
            min={0}
            max={100}
            id="slider"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
        </Row>
        <Label htmlFor="slider">Playoff Experience</Label>
        <Row className="slider-row">
          <Slider
            min={0}
            max={100}
            id="slider"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
        </Row>

        <Label htmlFor="slider">Playoff Experience</Label>
        <Row className="slider-row">
          <Slider
            min={0}
            max={100}
            id="slider"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
        </Row>
        <Label htmlFor="slider">Playoff Experience</Label>
        <Row className="slider-row">
          <Slider
            min={0}
            max={100}
            id="slider"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
        </Row>
        <Label htmlFor="slider">Playoff Experience</Label>
        <Row className="slider-row">
          <Slider
            min={0}
            max={100}
            id="slider"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
        </Row>
        <Label htmlFor="slider">Playoff Experience</Label>
      </div>
    )
  }
}

export default Slider
