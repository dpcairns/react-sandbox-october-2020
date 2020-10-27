import React from 'react';
import './App.css';
import MySpecialFooter from './MySpecialFooter.js';
import MySpecialHeader from './MySpecialHeader.js';
import ArticleList from './ArticleList.js';

export default class App extends React.Component {
  render() {
      return (
        <div className="grid-stuff">
          <h1>Time to click the legos together!</h1>
          <MySpecialHeader name="dani" />
          <ArticleList />
          <MySpecialFooter phone="345-456-5431" />
        </div>
      );
  }
}