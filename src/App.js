import React, {Component} from 'react';
import Routes from './routes';
import axios from 'axios';
import List from "./List";

/*class App extends Component {
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
        this.getPeople();

    }

    getPeople() {
        return axios.get("https://swapi.co/api/people/").then((response) => {
            this.setState({people: response.data.results});
        })
    }

    render() {
        return (
            <div className="App">
                <List people={this.state.people}/>
            </div>
        );
    }
}*/

export default ()=> <Routes/>;
