import React, { Component } from 'react'
import fetch from 'superagent';

// const sleep = (time) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, time)
// });

export default class FetchPage extends Component {
    state = {
        quotes: []
    }

    componentDidMount = async () => {
        const response = await fetch.get('http://futuramaapi.herokuapp.com/api/quotes');

        // await sleep(2000)
        this.setState({ quotes: response.body });
    }

    render() {
        return (
            <div className="fetch">
                {
                this.state.quotes.length === 0 
                ? <iframe 
                    src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" 
                    title={Math.random()} 
                    width="480" 
                    height="480" 
                    frameBorder="0" 
                    className="giphy-embed" 
                    allowFullScreen/>
                : JSON.stringify(this.state.quotes)
                }
            </div>
        )
    }
}

