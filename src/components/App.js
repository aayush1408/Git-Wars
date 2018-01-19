import React from 'react';
import axios from 'axios';
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
            
      </div>
    );
  }
}

export default App;
