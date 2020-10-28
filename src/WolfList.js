import React, { Component } from 'react'
import MyAmazingArticle from './MyAmazingArticle.js';

// presentational component -- no state, just takes in props and display them
export default class WolfList extends Component {
    render() {
        const filteredWolves = this.props.wolves.filter((wolf) => {
          // code golf: this.props.wolves.filter((wolf) => !this.state.filter || (wolf.size === this.state.filter))
          if (!this.props.filter) return true;

          if (wolf.size === this.props.filter) return true;

          return false
        });

        return (
          <>
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
