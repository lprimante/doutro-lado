import React from 'react'
import Logo from '../../img/logo-01.png'
import LinkMenu from './menu/Menu'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render =  () => {
   
    return (
      <nav className="navbar">
        <div>
            <Link to="/"> <img className="navbar-logo" src={Logo} alt="Logotipo do Doutro Lado" /> </Link>
        </div>
        <LinkMenu />
    </nav>
    )
  }
}

export default Nav