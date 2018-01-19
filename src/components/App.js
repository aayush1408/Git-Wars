import React from 'react';
import axios from 'axios';
import SearchBar1 from './search_bar1.js';
import SearchBar2 from './search_bar2.js';
class App extends React.Component {
  constructor(props){
    super(props);
    axios.get('https://api.github.com/users/aayush1408')
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err.response)
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar1 />
        <br/><br/>
        <SearchBar2 />
      </div>
    );
  }
}

export default App;
