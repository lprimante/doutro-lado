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
          <h1>Venha para o D'outro Lado</h1>
          <button>Conheça nossos produtos</button>
        </div>  
      </header>
    )
  }
}

export default Header