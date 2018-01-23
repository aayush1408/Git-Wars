import React from 'react';
export default class User1 extends React.Component{
render(){
    return(
            <div>
                <h1> Name:{this.props.details1.name}</h1>
                <img src={this.props.details1.avatar_url} width="120" height="120"  />
                <h2> Username:{this.props.details1.login} </h2>
                <h3> Repositry:{this.props.details1.public_repos} </h3>
                <h4> Followers: {this.props.details1.followers}</h4>
            </div>
           )
}
}
