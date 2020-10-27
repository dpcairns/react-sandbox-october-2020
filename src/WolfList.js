import React, { Component } from 'react'
import MyAmazingArticle from './MyAmazingArticle.js';
import wolves from './wolves.js';

export default class ArticleList extends Component {
    render() {
        return (
            <div className="articles">
          {
            wolves.map(wolf => 
              <MyAmazingArticle 
                caption={wolf.title} 
                color={wolf.background}
                size={wolf.size}
                />)
          }
          </div>
        )
    }
}
