import React, { Component } from 'react'
import { Slider, InputNumber, Row, Col } from 'antd'

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
      <Row className="slider-row">
        <Col span={4}>
          <Slider
            min={0}
            max={100}
            id="slider"
            onChange={this.onChange}
            value={this.state.inputValue}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={100}
            style={{ marginLeft: 16 }}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
        <label htmlFor="slider">Playoff Experience</label>
      </Row>
    )
  }
}

export default Slider
