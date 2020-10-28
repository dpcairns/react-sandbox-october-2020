import React from 'react';
import './App.css';
import MySpecialFooter from './MySpecialFooter.js';
import MySpecialHeader from './MySpecialHeader.js';
import WolfList from './WolfList.js';
import DropDown from './DropDown.js';

import wolves from './wolves.js';

// 0) move DropDown into App.js
// 1) move filter state to App.js
// 2) give DropDown the debit card to change App.js state
// 3) give WolfList the filter (since it's the component that needs it)

// app.js is a container component. it manages state and passes it to children.
export default class App extends React.Component {
  state = {
    filter: ''
  }

  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  }

  render() {
      return (
        <div className="grid-stuff">
          <h1>Time to click the legos together!</h1>

          <MySpecialHeader name="dani" />
          <WolfList wolves={wolves} filter={this.state.filter}/>
          <MySpecialFooter phone="345-456-5431" />
          <DropDown handleChange={this.handleChange} />
        </div>
      );
  }
}