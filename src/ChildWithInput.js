import React, { Component } from 'react';

export default class ChildWithInput extends Component {
    render() {
        return (
        <>
          <input onChange={this.props.swipeDebitCard}/>
           You have: {this.props.balance}
        </>
        )
    }
}