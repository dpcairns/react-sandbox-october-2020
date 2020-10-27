import React, { Component } from 'react'
import MyAmazingArticle from './MyAmazingArticle.js';

export default class WolfList extends Component {
  state = {
    filter: ''
  }

  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  }

    render() {
        const filteredWolves = this.props.wolves.filter((wolf) => {
          // code golf: this.props.wolves.filter((wolf) => !this.state.filter || (wolf.size === this.state.filter))
          if (!this.state.filter) return true;

          if (wolf.size === this.state.filter) return true;

          return false
        });

        return (
          <>
            <select onChange={this.handleChange}>
              <option value=''>Show All</option>
              <option value='small'>Small</option>
              <option value='medium'>Medium</option>
              <option value='large'>Large</option>
            </select>
            <div className="articles">
          {
            filteredWolves.map(wolf => 
              <MyAmazingArticle 
                caption={wolf.title} 
                color={wolf.background}
                size={wolf.size}
                />)
          }
          </div>
        </>
        )
    }
}
