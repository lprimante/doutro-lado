import React from 'react'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <header className="header-background">
        <div className="header-text">
          <h1>Venha para o D'Outro Lado</h1>
          <p className="header-text-mission" >O D'Outro Lado é um coletivo que conecta artistas e bandas independentes, difundindo suas ideias, posições e talentos, através da produção cultural e orientando artistas a potencializar o seus trabalhos</p>
          <button className="button">Quero saber mais</button>
        </div>  
      </header>
    )
  }
}

export default Header