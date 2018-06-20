import React, { Component } from 'react';
import Nav from './componentes/nav/Nav'
import './App.css';
import Header from './componentes/header/Header';
import About from './componentes/about/About';
import Parallax from './componentes/parallax/Parallax'
import Bandas from './componentes/bandas/Bandas'
import Footer from './componentes/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <About />
        <Parallax />
        <Bandas />
        <Footer />
      </div>
    );
  }
}

export default App;
