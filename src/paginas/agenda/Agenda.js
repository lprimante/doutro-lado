import React, { Component } from 'react';
import Parallax from '../../componentes/parallax/Parallax'
import './Agenda.css'

class Agenda extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
            evento: {}
        } 

    }    
    //     componentDidMount() {

    //         window.fbAsyncInit = function() {
    //             const FB = window.FB
    //               FB.init({
    //                 appId            : '372386323200352',
    //                 autoLogAppEvents : true,
    //                 xfbml            : true,
    //                 version          : 'v3.0'
    //               });
            
    //               initFB()
    
    //             };
    
    //         (function(d, s, id){
    //             var js, fjs = d.getElementsByTagName(s)[0];
    //             if (d.getElementById(id)) {return;}
    //             js = d.createElement(s); js.id = id;
    //             js.src = "https://connect.facebook.net/en_US/sdk.js";
    //             fjs.parentNode.insertBefore(js, fjs);
    //             }(document, 'script', 'facebook-jssdk'));

    
    //         function initFB() {
    //             const FB = window.FB
    //                 FB.api(
    //                     '/DOutro.Lado/events/',
    //                     'GET',
    //                         { access_token: "EAALf9J7KbXIBAON5JcKvl9uLhb0QuwGzrPnsh3DcN2Wa4Thb5rXByctM4qtH0ZCle0fy17c9ZAkirgKqb81atftMEomSppDa5ZCw2J7kcZACcUskRLiAZBJtlNWp13G5ssuwZCm3OHiLgk7n9l5k7XsiOT8X0vTOWJMpFmC6IIYAZDZD", },
    //                         function (response) {
    //                             console.log(response)
    //                             if (!response || response.error) {
    //                             alert('Error occured');
    //                         } else {
    //                             alert('Deu certo');
    //                             eventos(response.data)
    //                         }  
    //                         }
                            
    //                 ) 
    //         } 
    //     }

    // eventos(response) {
    //     this.state.evento = response
    //     return this.state.evento.map(function(ele) { 
    //         console.log(ele.name)
    //         return ( 
    //         <li>
    //             <h2>{ele.name}</h2>
    //             <p> {ele.description}</p>
    //         </li> 
    //         )} )
    // }

    render() {
        return (
            <main>
                <Parallax titulo={"Agenda"} classesDoParallax={"agenda"} />
                <ul className="agenda-bandas">
                    {/* {this.eventos} */}
                </ul>
            </main>
        );
    }
}
  
export default Agenda
