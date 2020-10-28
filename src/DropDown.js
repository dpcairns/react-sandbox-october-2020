import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <select onChange={this.props.handleChange}>
              <option value=''>Show All</option>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>   
        )
    }
}
