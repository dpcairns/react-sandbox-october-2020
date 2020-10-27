import React from 'react';
import './App.css';
import MyAmazingArticle from './MyAmazingArticle.js';
import MySpecialFooter from './MySpecialFooter.js';
import MySpecialHeader from './MySpecialHeader.js';
import articles from './articles.js';

export default class App extends React.Component {
  render() {
      return (
        <div>
        <h1>Time to click the legos together!</h1>
          <MySpecialHeader name="dani" />
          <MyAmazingArticle caption={articles[0].title} color={articles[0].background} />
          <MyAmazingArticle caption={articles[1].title} color={articles[1].background} />
          <MyAmazingArticle caption={articles[2].title} color={articles[2].background} />
          <MyAmazingArticle caption={articles[3].title} color={articles[3].background} />
          <MySpecialFooter phone="345-456-5431" />
        </div>
      );
  }
}