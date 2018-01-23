import React from 'react';
export default class User1 extends React.Component{
render(){
    return(
            <div>
                <h1> Name:{this.props.details2.name}</h1>
                <img src={this.props.details2.avatar_url} width="120" height="120" />
                <h2> Username:{this.props.details2.login} </h2>
                <h3> Repositry:{this.props.details2.public_repos} </h3>
                <h4> Followers: {this.props.details2.followers}</h4>
            </div>
           )
}
}
