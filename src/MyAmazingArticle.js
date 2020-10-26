import React from 'react';

export default class MyAmazingArticle extends React.Component {
    render() {
        return (
          <div className='article'>
            <img className='wolf' src="images/wolf.png" alt='wolf'/>
            <div>This is an example of an article!</div>
          </div>
        );
    }
  }