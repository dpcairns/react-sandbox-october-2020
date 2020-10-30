import React, { Component } from 'react'
import fetch from 'superagent';
import { Link } from 'react-router-dom';

// const sleep = (time) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, time)
// });

export default class FetchPage extends Component {
    state = {
        quotes: [],
        character: 'fry',
        loading: false
    }

    componentDidMount = async () => {
        await this.fetchQuotes();
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await this.fetchQuotes();
    }

    handleChange = (e) => {
        this.setState({ character: e.target.value  });
    }

    fetchQuotes = async () => {
        this.setState({ loading: true })
        const response = await fetch.get(`http://futuramaapi.herokuapp.com/api/quotes`);

        this.setState({ 
            quotes: response.body, 
            loading: false,
         });
    }

    handleClick = async (quote) => {
        // how can i get the character that i clicked on?
        this.props.history.push(`/quotes/${quote.character}`);
    }

    render() {
        return (
            <div className="fetch">
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} />
                <button>Search by character</button>
            </form>
                {
                this.state.loading
                ? 'loading!!!'
                // what if i wanted an onClick handler inside of a map?
                : this.state.quotes.map(quote => 
                    // we could use a link . . .
                    <Link to={`/quotes/${quote.character}`}>
                        {/* or we could use an anonymous callback in our onClick */}
                        <div key={quote.quote} onClick={(e) => this.handleClick(quote)}>
                            <p>{quote.character}</p>
                            <img src={quote.image} alt={quote.character} width="100" height="100"/>
                            <p>{quote.quote}</p>
                        </div>
                    </Link>)
                }
            </div>
        )
    }
}

