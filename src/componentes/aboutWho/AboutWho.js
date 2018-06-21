import React, { Component } from 'react';
import LogoThumb from '../../img/logo.jpg'
import './AboutWho.css'

class AboutWho extends Component {
    render() {
      return (
            <section>
                <div className="row row-aboutWho">
                    <div className="column container">
                        <img className="logoThumb" src={LogoThumb} alt="" />
                    </div>
                    <div className="column container">
                        <p>O projeto D’Outro Lado nasceu das ruas, dos bares, dos shows, do underground.  </p><p> Bandas independentes são sempre consideradas B e dificilmente encontram apoio e voz. É muito comum artistas pagarem para tocar, venderem cotas de ingresso para no final terem seus trabalhos desmerecidos e não reconhecidos. Estamos sempre do outro lado e, juntos, podemos transformar este lado, unindo forças, ambições e trocando experiência. </p> <p>O D’Outro Lado é uma parceria com a Ant-Shirt Merchan que visa facilitar a divulgação e o trabalho das bandas independentes. Todas as bandas participantes tem participação nos lucros na venda dos seus produtos, o qual é estipulado por elas mesmas. Nenhuma banda deveria se preocupar com seu merchan. Nos cuidaremos disso: produção, envio e divulgação. Nossa meta é nos apoiar coletivamente, realizando promoção de shows e eventos para que as bandas possam sair da web, se conhecer e fazer o que devem fazer que é tocar! </p> <p> Bem vindo ao D’Outro Lado!</p>
                    </div>
                </div>
            </section>
        );
    }
}
  
export default AboutWho