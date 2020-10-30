import React, { Component } from 'react'
import fetch from 'superagent';

export default class PaginationPage extends Component {
    state = {
        pokemon: [],
        character: 'fry',
        loading: false,
        pageNumber: 1
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await this.fetchPokemon();
    }

    handleChange = (e) => {
        this.setState({ character: e.target.value  });
    }

    handleIncrement = async () => {
        await this.setState({ 
            pageNumber: this.state.pageNumber + 1, 
        })

        await this.fetchPokemon();
    }

    handleDecrement = async () => {
        await this.setState({ 
            pageNumber: this.state.pageNumber - 1, 
        })

        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true })
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20`);

        this.setState({ 
            pokemon: response.body.results, 
            loading: false,
            count: response.body.count
         });
    }

    render() {
        return (
            <div className="fetch">
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} />
                <button>Search by character</button>
            </form>
            <div>
                Page {this.state.pageNumber} out of {Math.ceil(this.state.count / 20)}
            </div>
            <div>
                {this.state.count} total pokemon in query 
            </div>
            {
             <button 
                disabled={this.state.pageNumber === 1} 
                onClick={this.handleDecrement}>
                Prev
            </button>
            }
            {
            <button 
                onClick={this.handleIncrement} 
                disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)}>
                Next
            </button>
            }
            <div className="poke">
                {
                this.state.loading
                ? 'loading!!!'
                // what if i wanted an onClick handler inside of a map?
                : this.state.pokemon.map(pokemon => 
                        <div key={pokemon.pokemon}>
                            <p>{pokemon.pokemon}</p>
                            <img src={pokemon.url_image} alt={pokemon.pokemon} width="100" height="100"/>
                            <p>{pokemon.type_1}</p>
                        </div>
                        )
                }
            </div>
            </div>
        )
    }
}

