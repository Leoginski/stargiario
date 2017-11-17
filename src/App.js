import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import List from './List';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            people: [],
            planets: [],
            species: [],
            starships: [],
            vehicles: [],
        }
    }

    componentDidMount() {
        this.getPeople();
    }

    getPeople() {
        return axios.get("https://swapi.co/api/people/").then((response) => {
            this.setState({people: response.data.results});
        })
    }

    render() {
        const {people} = this.state.people;
        return (
            <div className="App">
                <List people={this.state.people}/>
            </div>
        );
    }
}

export default App;
