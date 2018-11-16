import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import Portfolio from './Portfolio.js';
import NavBar from './NavBar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Row><Col l={12}><NavBar/></Col></Row>
        <Row className="App"><Col l={12}><Portfolio/></Col></Row>
      </div>
    );
  }
}

export default App;
