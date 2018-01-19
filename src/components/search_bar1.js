import React from 'react';

export default class SearchBar1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {user1 : ''}
    }
    onInputChange(e){
        this.setState({ user1 : e.target.value });
        // console.log(this.state.term);
    }
    render(){
        return(
                <input type="text" 
                placeholder = "Enter the 1st user"
                value={this.state.user1}
                onChange={this.onInputChange.bind(this)} />
               )
    }
}
