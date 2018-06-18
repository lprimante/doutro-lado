import React, { Component } from 'react';
import Nav from './componentes/nav/Nav'
import './App.css';
import Header from './componentes/header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
