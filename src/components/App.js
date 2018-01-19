import React from 'react';
import SearchBar1 from './search_bar1.js';
import SearchBar2 from './search_bar2.js';
import User1 from './user1.js';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar1 />
        <br/><br/>
        <SearchBar2 />
        <User1 />
      </div>
    );
  }
}

export default App;
