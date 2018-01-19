import React from 'react';
import axios from 'axios';

export default class SearchBar1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {user1 : '',details1:[]}
    }
    getUser1(e){
        e.preventDefault();
        this.setState({user1:''});
          axios.get(`https://api.github.com/users/${this.state.user1}`)
            .then((res)=>{
                console.log(res.data);
                this.setState({details1:res.data});
                this.props.getDetails1(this.state.details1);
        })
            .catch((err)=>{
                console.log(err.response);
        })
    }
    onInputChange(e){
        e.preventDefault();
        this.setState({ user1 : e.target.value });
            }
    render(){
        return(
               <div>
               <form onSubmit={this.getUser1.bind(this)}>
                <input 
                type="text" 
                value={this.state.user1}
                placeholder = "Enter the 1st user"
                onChange = {this.onInputChange.bind(this)}
                 />
                <input type="submit" />
                </form>
                </div>
               )
    }
}
