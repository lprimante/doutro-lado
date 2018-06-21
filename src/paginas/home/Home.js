import React, { Component } from 'react';
import Header from '../../componentes/header/Header'
import About from '../../componentes/about/About'
import Parallax from '../../componentes/parallax/Parallax'
import Bandas from '../../componentes/bandas/Bandas'
import './Home.css'

class Home extends Component {
    render() {
      return (
            <div>
                <Header />
                <About />
                <Parallax classesDoParallax={"home"} />
                <Bandas />
            </div>
        );
    }
}
  
export default Home