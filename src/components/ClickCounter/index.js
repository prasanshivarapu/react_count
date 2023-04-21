// Write your code here

import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increase = () => {
    this.setState(p => ({count: p.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="greet">
        <div className="greet2">
          <h1> button has been clicked {count} times</h1>
          <p>click the button to increase count</p>
          <button type="button" onClick={this.increase}>
            click
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
