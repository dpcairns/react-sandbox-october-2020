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
import DetailPage from './DetailPage.js';
import PaginationPage from './PaginationPage.js';

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
                    <Route 
                        // a special way of defining a variable in a react-router app
                        path="/quotes/:booger" 
                        exact
                        render={(routerProps) => <DetailPage {...routerProps} />} 
                    />
                                        <Route 
                        // a special way of defining a variable in a react-router app
                        path="/pagination" 
                        exact
                        render={(routerProps) => <PaginationPage {...routerProps} />} 
                    />
                    </Switch>
                    <MySpecialFooter />
                </Router>
            </div>
        )
    }
}