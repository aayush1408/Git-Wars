import React from 'react';
import SearchBar1 from './search_bar1.js';
import SearchBar2 from './search_bar2.js';
import User1 from './user1.js';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {details1 :[] };
  }
  getDetails1(detail1){
    
    console.log(`Details: ${JSON.stringify(detail1)}`); //this line is running
    this.setState({ details1: JSON.stringify(detail1)}); //code below this is not executing ????
    console.log('f');
    console.log(this.state.details1);  
    
    
  }
  render() {
    return (
      <div className="App">
        <SearchBar1  getDetails1={this.getDetails1}/>
        <br/><br/>
        <SearchBar2 />
      </div>
    );
  }
}

export default App;
