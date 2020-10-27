import React from 'react';
import './App.css';
import MyAmazingArticle from './MyAmazingArticle.js';
import MySpecialFooter from './MySpecialFooter.js';
import MySpecialHeader from './MySpecialHeader.js';

export default class App extends React.Component {
  render() {
      return (
        <div>
        <h1>Time to click the legos together!</h1>
          <MySpecialHeader name="dani" />
          <MyAmazingArticle caption="hi i am thirsty wolf"/>
          <MyAmazingArticle caption="hi i am hungry wolf" />
          <MyAmazingArticle caption="hi i am bad wolf" />
          <MyAmazingArticle caption="hi i am good wolf"/>
          <MySpecialFooter phone="345-456-5431" />
        </div>
      );
  }
}