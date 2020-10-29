import React, { Component } from 'react'
import fetch from 'superagent';

// const sleep = (time) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, time)
// });

export default class FetchPage extends Component {
    state = {
        quotes: [],
        character: ''
    }

    componentDidMount = async () => {
        const response = await fetch.get('http://futuramaapi.herokuapp.com/api/characters/fry');

        // await sleep(2000)
        this.setState({ quotes: response.body });
    }

    handleClick = async (e) => {
        e.preventDefault();
        const response = await fetch.get(`http://futuramaapi.herokuapp.com/api/characters/${this.state.character}`);

        // await sleep(2000)
        this.setState({ quotes: response.body });
    }

    handleChange = (e) => {
        this.setState({ character: e.target.value  });
    }

    render() {
        return (
            <div className="fetch">
                <form onSubmit={this.handleClick}>
                <input onChange={this.handleChange} />
                <button >Search by character</button>
                </form>
                {
                this.state.quotes.length === 0 
                ? 'loading!!!'
                : this.state.quotes.map(quote => <div key={quote.quote}>
                    <p>{quote.character}</p>
                    <img src={quote.image} alt={quote.character} width="100" height="100"/>
                    <p>{quote.quote}</p>
                    </div>)
                }
            </div>
        )
    }
}

