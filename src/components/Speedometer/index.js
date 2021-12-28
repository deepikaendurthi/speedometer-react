// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onBrakeBtn = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  onAccelerateBtn = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    console.log(speed)
    return (
      <div className="bg-container">
        <h1 className="heading1">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="front"
        />
        <h1 className="heading2">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph.Max Limit is 200mph</p>
        <div className="buttons-container">
          <button
            type="button"
            className="acc-button button"
            onClick={this.onAccelerateBtn}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="app-button button"
            onClick={this.onBrakeBtn}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
