import React, { Component } from 'react'
import fetch from 'superagent';

export default class DetailPage extends Component {
    state = {
        quotes: [],
    }

    componentDidMount = async () => {
        const response = await fetch.get(`http://futuramaapi.herokuapp.com/api/characters/${this.props.match.params.booger}`);

        this.setState({ quotes: response.body });
    }

    render() {
        return (
            <div className="fetch">
                <h1>{this.props.match.params.booger}'s quotes!</h1>
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

