import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import List from "./List";

class App extends Component {
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

    // getPeople(param) {
    //     let result = [];
    //     axios.get("https://swapi.co/api/people/").then((response) => {
    //         response.data.results.map((p) => {
    //             if (p.name.toLowerCase().indexOf(param.toLowerCase()) >= 0) {
    //                 result.push(p);
    //             }
    //         });
    //     });
    //     this.setState({result: result});
    //     // let list = <List people={results}/>;
    //     // document.getElementById('results').append(list);
    // }

    render() {
        return (
            <div className="App">
                <List people={this.state.people}/>
            </div>
        );
    }
}

export default App;
