import React, {Component} from 'react';

class CharInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {expand: false};
    }

    toggle() {
        this.setState({expand: !this.state.expand});
    }

    render() {
        const info = this.props.charInfo;
        if (!this.state.expand) {
            return <p className="btn btn-info" onClick={this.toggle.bind(this)}> Show more...</p>
        }
        return (
            <div>
                <p className="btn btn-info" onClick={this.toggle.bind(this)}> Show less..</p>
                <ul>
                    <li>Data de Nascimento: {info.birth_year}</li>
                    <li>Cor dos Olhos: {info.eye_color}</li>
                    <li>Cor do Cabelo: {info.hair_color}</li>
                    <li>Sexo: {info.gender}</li>
                    <li>Altura: {info.height}</li>
                    <li>Peso: {info.mass}</li>
                </ul>
            </div>
        );
    }
}

export default CharInfo;