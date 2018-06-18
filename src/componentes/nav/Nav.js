import React from 'react'
import Logo from '../../img/logo-01.png'
import LinkMenu from './menu/Menu'
import './Nav.css'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render =  () => {
   
    return (
      <nav className="navbar">
        <div>
            <img className="navbar-logo" src={Logo} alt="Logotipo do Doutro Lado" />
        </div>
        <LinkMenu />
    </nav>
    )
  }
}

export default Nav