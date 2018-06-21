import React, { Component } from 'react'
import Parallax from '../../componentes/parallax/Parallax'
import './Banda.css'

export default class Banda extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <Parallax titulo={"Minha Banda"} classesDoParallax={"band"} />
            </main>
        )
    }
}
