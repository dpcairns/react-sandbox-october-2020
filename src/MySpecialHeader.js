import React from 'react';
import { Link } from 'react-router-dom';

export default class MySpecialHeader extends React.Component {
    render() {
        return (
            <div className="header"> Hi, {this.props.name}, I am the header!
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/list" >List</Link>
                </li>
            </ul>
            </div>
        );
    }
  }
  