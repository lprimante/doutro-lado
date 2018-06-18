import React from 'react'
import './Menu.css'

class LinkMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aberto: false
    }
  }

  handleAbreOuFecha = e => {
    this.setState(prevState => {
        return { aberto: !prevState.aberto }
    })
  }


  render () {
    let classesDasOpcoes = "navbar-menu__opcoes"
    let classesDoBotao = "navbar-menu__botao"

    if (this.state.aberto) {
        classesDasOpcoes += " navbar-menu__opcoes--aberto"
        classesDoBotao += " navbar-menu__botao--aberto"
    } 

    return (
      <div className="navbar-menu navbar-links">
        <a className={classesDoBotao} onClick={this.handleAbreOuFecha}> 
          Menu 
        </a>
        <ul className={classesDasOpcoes}>
          <li>
            <a href="#" activeClassName="navbar-links__ativo" >Home</a>
          </li>
          <li>
            <a href="#" activeClassName="navbar-links__ativo" >Quem Somos</a>
          </li>
          <li>
            <a href="3" activeClassName="navbar-links__ativo" >Agenda</a>
          </li>
          <li>
            <a href="#" activeClassName="navbar-links__ativo" >Bandas</a> 
          </li>
          <li>
            <a href="#" activeClassName="navbar-links__ativo" >Parceiros</a> 
          </li>
          <li>
            <a href="#" activeClassName="navbar-links__ativo" >Loja</a> 
          </li>
        </ul>
      </div>
    )
  }
}

export default LinkMenu