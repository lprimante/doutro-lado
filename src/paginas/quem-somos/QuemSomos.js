import React, { Component } from 'react'
import AboutWho from '../../componentes/aboutWho/AboutWho'
import Parallax from '../../componentes/parallax/Parallax'
import './QuemSomos.css'

class QuemSomos extends Component {
    render() {
      return (
            <main>
                <Parallax titulo={"Quem Somos"} classesDoParallax={"aboutWho"} />
                <AboutWho />
            </main>
        );
    }
}
  
export default QuemSomos