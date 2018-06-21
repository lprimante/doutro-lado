import React from 'react'
import Parallax from '../parallax/Parallax'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <Parallax titulo={"Venha para o D'Outro Lado"} classesDoParallax={"home-header"} >
        <div className="header-text">
          <p className="header-text-mission" >O D'Outro Lado é um coletivo que conecta artistas e bandas independentes, difundindo suas ideias, posições e talentos, através da produção cultural e orientando artistas a potencializar o seus trabalhos</p>
          <button className="button">Quero saber mais</button>
        </div>  
      </Parallax>
    )
  }
}

export default Header