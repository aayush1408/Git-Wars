import React from 'react';
export default class User1 extends React.Component{
    constructor(props){
        super(props);
       }
       renderDetail(){
         return this.props.detailUser1.map((info)=>{
            return <h2>{info.name}</h2>;
        })
       }

render(){
    return(
            <div>
                {this.renderDetail}
            </div>
           )
}
}
