import React from 'react'
import { Carousel } from 'antd'
import '../../../../node_modules/antd/lib/carousel/style/index.css'
import capa1 from '../../../img/capa1.jpg'
import capa2 from '../../../img/capa2.png'
import capa3 from '../../../img/capa3.jpg'
import capa4 from '../../../img/capa4.bmp'
import capa5 from '../../../img/capa5.jpg'
import capa6 from '../../../img/capa6.jpg'
import capa7 from '../../../img/capa7.jpeg'
import './Slide.css'

export default class Slide extends React.Component {
    constructor(props) {
        super(props)
    }

       render = () => {
           const Settings = {
            dots: false,
            slidesToShow: 4,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                    }
                }
            ]    
           }

            return (
                <Carousel {...Settings} >
                        <a href="#" className="slick-slide" ><img  src={capa1} alt="Legenda da imagem 1" /></a>
                        <a href="#" className="slick-slide" ><img  src={capa2} alt="Legenda da imagem 2" /></a>
                        <a href="#" className="slick-slide"><img  src={capa3} alt="Legenda da imagem 2" /></a>
                        <a href="#" className="slick-slide"><img  src={capa4} alt="Legenda da imagem 2" /></a>
                        <a href="#" className="slick-slide"><img  src={capa5} alt="Legenda da imagem 2" /></a>
                        <a href="#" className="slick-slide"><img  src={capa6} alt="Legenda da imagem 2" /></a>
                        <a href="#" className="slick-slide"><img  src={capa7} alt="Legenda da imagem 2" /></a>
                </Carousel >
            )
    }
} 