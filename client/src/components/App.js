import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import NavBar from './NavBar/index';
import DrumMachine from './DrumMachine/index';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <DrumMachine />
      </div>
    );
  }
}

export default App;
