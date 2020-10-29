import React, { Component } from 'react'
import './App.css';
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import ListPage from './ListPage.js';
import WolfPage from './WolfPage.js';
import MySpecialHeader from './MySpecialHeader.js';
import MySpecialFooter from './MySpecialFooter.js';
import FetchPage from './FetchPage.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <MySpecialHeader name="dani" />
                    <Switch>
                    <Route 
                        path="/" 
                        exact
                        render={(routerProps) => <WolfPage {...routerProps} />} 
                    />
                    <Route 
                        path="/list" 
                        exact
                        render={(routerProps) => <ListPage {...routerProps} />} 
                    />
                    <Route 
                        path="/fetch" 
                        exact
                        render={(routerProps) => <FetchPage {...routerProps} />} 
                    />
                    </Switch>
                    <MySpecialFooter />
                </Router>
            </div>
        )
    }
}