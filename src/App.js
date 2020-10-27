import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    boogerCounter: 0,
  }

  handleBoogerClick = (e) => {
    this.setState({ 
      boogerCounter: this.state.boogerCounter + 1 
    })
  }

  render() {
      return (
        <div className="container">
            <h1>Click the button to increment the counter</h1>
            <div className="flex">
            <button onClick={this.handleBoogerClick}>
              Click to count
            </button>
            <div>
              Current count: {this.state.boogerCounter}
            </div>
          </div>
        </div>
      );
  }
}