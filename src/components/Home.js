import React, { Component } from 'react';
import '../App.css';



class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className='main-title'>Welcome To Bit Atlas </h1>
        <div class="ui inverted segment">
          <button class="ui inverted primary button">Practice</button>
        </div>

        <div class="ui inverted segment">
          <button class="ui inverted primary button">Contribute</button>
        </div>
      </div>
    );
  }
}

export default Home;
