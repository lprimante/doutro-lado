import React, { Component } from 'react';
import Parallax from '../../componentes/parallax/Parallax'
import getData from '../../apis/facebook'
import './Agenda.css'

const eventos = getData("https://graph.facebook.com/v3.0/1589666694645155/events?access_token=EAAFSrvKDeWABAEPpwTAM04VNlQAzR0krcptcCjKIT9xs0pWWUDSLp8bqLzz8GBZCEYTIo6ZABbsN7HeurS63NxZCaVMeJIlKB56sIejZBiml2fnKW7tt3TMdjpzkUdGxShQ5CrpY9NqKLGtUPcP5HeVOAswLERAPEPnKNWgxFZB9cL2nwAw9a")

 
class Agenda extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            data: []
        } 

    }    

    componentDidMount () {
        eventos.then(response => {
            let resposta = JSON.parse( response )
            this.setState({ data: resposta.data })
            console.log(this.state.data) 

            var now = (new Date()).getTime()
            console.log(now)
        
        })
    }
    
    render() {
   
        return (
            <main>
                <Parallax titulo={"Agenda"} classesDoParallax={"agenda"} />
                <ul className="agenda-bandas"> 
                    {this.state.data.map(d => 
                        <li key={d}> 
                            <h2>{d.name}</h2>
                            <p>{d.place.name}</p>
                            <p>{d.start_time}</p>
                            <p>{d.description}</p>
                        </li>)}
                </ul>
            </main>
        );
    }
}
  
export default Agenda
