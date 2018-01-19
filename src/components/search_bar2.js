import React from 'react';
import axios from 'axios';

export default class SearchBar2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {user2 : '',details2:[]}
    }
    getUser2(e){
        e.preventDefault();
        this.setState({user2:''});
          axios.get(`https://api.github.com/users/${this.state.user2}`)
            .then((res)=>{
                console.log(res.data);
                this.setState({details2:res.data});
        })
            .catch((err)=>{
                console.log(err.response);
        })
    }
    onInputChange(e){
        e.preventDefault();
        this.setState({ user2 : e.target.value });
            }
    render(){
        return(
               <div>
               <form onSubmit={this.getUser2.bind(this)}>
                <input 
                type="text" 
                value={this.state.user1}
                placeholder = "Enter the 2nd user"
                onChange = {this.onInputChange.bind(this)}
                 />
                <input type="submit" />
                </form>
                </div>
               )
    }
}
