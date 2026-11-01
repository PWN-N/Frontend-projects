import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    noOfLetters: 0,
  }

  onChangeInput = event => {
    this.setState({
      noOfLetters: event.target.value.length,
    })
  }

  render() {
    const {noOfLetters} = this.state
    return (
      <div className="calculator-container">
        <div className="calculator-content">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="userInput">Enter the phrase</label>
          <input
            id="userInput"
            type="text"
            placeholder="Enter your phrase"
            onChange={this.onChangeInput}
          />
          <p>No.of letters: {noOfLetters}</p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
