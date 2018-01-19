import React from 'react';

export default class SearchBar2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {user2 : ''}
    }
    onInputChange(e){
        this.setState({ user2 : e.target.value });
        // console.log(this.state.term);
    }
    render(){
        return(
                <input type="text" 
                placeholder = "Enter the 2nd user"
                value={this.state.user2}
                onChange={this.onInputChange.bind(this)} />
               )
    }
}
