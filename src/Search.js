import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import List from './List';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorito: false,
            films: [],
            people: [],
            planets: [],
            species: [],
            starships: [],
            vehicles: [],
        };
    }

    componentDidMount() {
        let state = localStorage.getItem('storage');
        state = JSON.parse(state);
        this.setState(state);
        this.getPeople();
    }

    lembrete() {
        if (!this.state.favorito) {
            alert("Lembre-se de nos adicionar aos Favoritos!");
            return this.setState({favorito: true});
        }
        this.save();
    }

    getPeople() {
        return axios.get("https://swapi.co/api/people/").then((response) => {
            this.setState({people: response.data.results});
        })
    }

    save() {
        let actualState = this.state;
        actualState = JSON.stringify(actualState);
        localStorage.setItem('storage', actualState);
    }

    render() {
        const {people} = this.state.people;
        return (
            <div className="App">
                <button onClick={this.lembrete.bind(this)}>favorito</button>
                <List people={this.state.people}/>
            </div>
        );
    }
}

export default Search;
