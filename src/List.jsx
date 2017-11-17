import React, {Component} from 'react';
import CharInfo from './CharInfo';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }

    render() {
        let filteredPeople = this.props.people.filter(
            (people) => {
                return people.name.toLocaleLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
            }
        );
        return (
            <div className={'container'}>
                <div className={'container bg-info rounded text-bold text-white'} style={{width: 250, height: 100}}>
                    <h5>Buscar</h5>
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