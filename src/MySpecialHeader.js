import React from 'react';

export default class MySpecialHeader extends React.Component {
    render() {
        return (
            <div className="header"> Hi, {this.props.name}, I am the header!
            <button>Log in</button>
            </div>
        );
    }
  }
  