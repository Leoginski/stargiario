import React, {Component} from 'react';

class CharInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
    }

    toggle() {
        this.setState({expanded: !this.state.expanded})
    }

    render() {
        const info = this.props.charInfo;
        if (!this.state.expanded) {
            return <p className="btn btn-info" onClick={this.toggle}> Show more...</p>
        }
        return <p className="btn btn-info" onClick={this.toggle}> Show less..</p>
    }
}

export default CharInfo;