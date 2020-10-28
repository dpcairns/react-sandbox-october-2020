import React, { Component } from 'react'
import ChildWithInput from './ChildWithInput.js';

export default class ParentWithState extends Component {
    state = {
        balance: '',
    }

    swipeDebitCard = (e) => {
        this.setState({ balance: e.target.value })
    }

    render() {

        return (
            <ChildWithInput 
            balance={this.state.balance}
            swipeDebitCard={this.swipeDebitCard}
             />
        )
    }
}
