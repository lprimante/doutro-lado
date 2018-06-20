import React from 'react'
import './Cards.css'
import card1 from '../../../img/img-01.jpeg'
import card2 from '../../../img/img-04.jpg'
import card3 from '../../../img/img-07.jpeg'

function Cards () {
    return (
        <div className="row row-cards">
            <div className="card-title">
                <img className="card-img" src={card1} alt="" />
                <h3>Produção Cultural</h3>
                <p>Organização de eventos diversos, além de promover o intercambio entre artistas de diferentes regiões e estilos musicais.</p>
            </div>
            <div className="card-title">
                <img className="card-img" src={card2} alt="" />
                <h3>Consultoria de Merchandising</h3>
                <p>Ajudar artistas a se enxergarem não apenas como produtores de conteúdo musical, ampliando o horizonte afim de  explorar todo o seu potencial.</p>
            </div>    
            <div className="card-title">
                <img className="card-img" src={card3} alt="" />
                <h3>Assessoria de Imprensa</h3>
                <p>Construção de material para divulgação de shows, lançamentos, releases, video clips e a produção de material gráfico ou digital.</p>
            </div>
        </div>
    );
}

export default Cards