import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TicTacToe.css';
import Game from './Game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Final for Frontend Development</h2>
        </div>
        
        
        <p className="App-intro">
        <div className="flexbox-container">
        <div><Game></Game></div>
        <div><Game></Game></div>
        <div><Game></Game></div>
        </div>
        </p>
      </div>
    );
  }
}

export default App;
