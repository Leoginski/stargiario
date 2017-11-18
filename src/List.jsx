import React, {Component} from 'react';
import CharInfo from './CharInfo';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            atribute: 'Nome'
        }
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }

    updateAtribute(event) {
        this.setState({atribute: event.target.value});
    }

    render() {
        let filteredPeople = this.props.people.filter(
            (people) => {
                if (this.state.atribute === 'Nome') {
                    return people.name.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
                }
                if (this.state.atribute === 'Olhos') {
                    return people.eye_color.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
                }
                if (this.state.atribute === 'Cabelos') {
                    return people.hair_color.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
                }
                if (this.state.atribute === 'Sexo') {
                    return people.gender.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
                }
            }
        );
        return (
            <div className={'container'}>
                <div className={'container bg-info rounded text-bold text-white'} style={{width: 250, height: 100}}>
                    <h5>Buscar</h5>
                    <select value={this.state.atribute} onChange={this.updateAtribute.bind(this)}>
                        <option>Nome</option>
                        <option>Olhos</option>
                        <option>Cabelos</option>
                        <option>Sexo</option>
                    </select>
                    <input value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                </div>
                {
                    filteredPeople.map((p) => {
                        return (
                            <div key={p.url} className={'container bg-dark rounded-circle'} style={{width: 600}}>
                                <h4 className="char-name text-bold text-warning">{p.name}</h4>
                                <CharInfo charInfo={p}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;