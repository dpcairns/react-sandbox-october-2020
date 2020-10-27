import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    counter: 0,
    nameInput: '',
    displayName: ''
  }

  handleClick = (e) => {
    this.setState({ 
      counter: this.state.counter + 1 
    })
  }

  handleDraculaClick = (e) => {
    this.setState({ 
      nameInput: 'dracula',
    })

  }

  handleChange = (e) => {
    this.setState({ 
      nameInput: e.target.value,
      counter: this.state.counter + 1
    })
  }

  handleDisplayName = (e) => {
    this.setState({ displayName: this.state.nameInput })
  }

  render() {
      return (
        <div className="container">
            <h1>Click the button to increment the counter</h1>
            <div className="flex">
            <button onClick={this.handleClick}>
              Click to count
            </button>
            <button onClick={this.handleDraculaClick}>
              I am actaully just count dracula
            </button>

            <div>
              Current count: {this.state.counter}
            </div>
            <div>
              <input value={this.state.nameInput} onChange={this.handleChange} />
            </div>
            <button onClick={this.handleDisplayName}>Show my name</button>
            <div>
              {this.state.displayName}
            </div>
          </div>
        </div>
      );
  }
}