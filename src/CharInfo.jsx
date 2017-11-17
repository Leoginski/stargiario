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
                <div className={'container text-bold text-white'}>
                    <p>Data de Nascimento: {info.birth_year}</p>
                    <p>Cor dos Olhos: {info.eye_color}</p>
                    <p>Cor do Cabelo: {info.hair_color}</p>
                    <p>Sexo: {info.gender}</p>
                    <p>Altura: {info.height}</p>
                    <p>Peso: {info.mass}</p>
                </div>
            </div>
        );
    }
}

export default CharInfo;