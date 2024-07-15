// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  onenterLetters = event => {
    this.setState({
      count: event.target.value.length,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="text-container">
          <h1 className="heading">Calculate the letters you entered</h1>
          <div className="user-text-container">
            <label htmlFor="user-input" className="sub-text">
              Enter the phrase
            </label>
            <input
              type="text"
              onChange={this.onenterLetters}
              className="input-user"
              placeholder="Enter the phrase"
              id="user-input"
            />
          </div>
          <div className="button-container">
            <p className="button">No.of letters: {count}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letter-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
