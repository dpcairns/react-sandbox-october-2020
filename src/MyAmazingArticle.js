import React from 'react';

export default class MyAmazingArticle extends React.Component {
    render() {
        return (
          <div className='article' style={{ background: this.props.color }}>
            <img className='wolf' src="images/wolf.png" alt='wolf'/>
        <div>{this.props.caption}</div>
          </div>
        );
    }
  }