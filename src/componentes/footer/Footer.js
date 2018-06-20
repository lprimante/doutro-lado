import React from 'react'
import SingUpForm from './singupform/SingUpForm'
import Logo from '../../img/logo-01.png'
import './Footer.css'

class Footer extends React.Component {
    constructor(props) {
        super(props)

    }

    render = () => {
        return (
            <footer>
                <div className="footer-sidebars container">
                    <div className="column container container-footer">
                        <img src={Logo} className="footer-logo" alt="Logotipo do Doutro Lado" />
                        <p className="container-footer-text">Somos um coletivo de artistas e bandas independentes. Estamos sempre do outro lado e, juntos, podemos transformar este lado, unindo forças, ambições e trocar experiências.</p>
                        <p className="container-footer-text"><strong>Entre em contato</strong></p>
                        <a href="mailto:doutrolado.loja@gmail.com">doutrolado.loja@gmail.com</a>
                    </div>
                    <div className="column container container-footer">
                        <p className="container-footer-text">Siga-nos nas nossas redes sociais</p>
                        <a className="fab fa-facebook-f link-social" href="https://www.facebook.com/DOutro.Lado/"></a>
                        <a href="https://open.spotify.com/user/d.outrolado?si=JYe0LuVUTwiiPFtB7oPk_Q" className="fab fa-spotify link-social"></a>
                        <a href="https://www.youtube.com/channel/UCMSnHwo3crUhPO76s3y6DbQ" className="fab fa-youtube link-social"></a>
                        <a href="https://www.instagram.com/doutro.lado/" className="fab fa-instagram link-social"></a> 
                    <div className="container-footer-form">
                        <p className="container-footer-text">Receba nossas novidades</p>
                        <SingUpForm />
                    </div>
                    </div>
                </div>
                <div className="footer-text">
                    <div className="copyright container">
                        <p> Copyright ©[2018] <a class="site-link" href="http://doutrolado.com.br/" title="D'Outro Lado" rel="home">D'Outro Lado</a>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer