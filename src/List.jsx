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
            <div className="">
                <input value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                {
                    filteredPeople.map((p) => {
                        return (
                            <div key={p.url}>
                                <h4 className="char-name">{p.name}</h4>
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