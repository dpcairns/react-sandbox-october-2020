import React, { Component } from 'react'
import MyAmazingArticle from './MyAmazingArticle.js';
import articles from './articles.js';

export default class ArticleList extends Component {
    render() {
        return (
            <div className="articles">
          {
            articles.map(article => 
              <MyAmazingArticle 
                caption={article.title} 
                color={article.background} />)
          }
          </div>
        )
    }
}
