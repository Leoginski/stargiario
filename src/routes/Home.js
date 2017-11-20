import React from 'react';

export default class Home extends React.Component{
    componentWillMount(){
       this.props.history.push('/home?ijustgotpushed=true'); 
    }  
    
    render(){
        return <div>HELLO</div>;
    }
}