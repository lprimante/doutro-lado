import React, { Component } from 'react';
import Parallax from '../../componentes/parallax/Parallax'
import './Agenda.css'

class Agenda extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        window.fbAsyncInit = function() {
            const FB = window.FB
              FB.init({
                appId            : '372386323200352',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v3.0'
              });
  
              initFB()
            };

            function initFB() {
                const FB = window.FB
                    FB.api(
                        '/DOutro.Lado/events/',
                        'GET',
                        {},
                        function(response) {
                            const eventosFacebook = response
                            console.log(eventosFacebook)
                        }
                    );
            } 
          
            (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = "https://connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));
            
    }

    render() {
        return (
            <main>
                <Parallax />
            </main>
        );
    }

}
  
export default Agenda