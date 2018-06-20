import React from 'react'
import Cards from './cards/Cards'
import './About.css'

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            <section className="container container-about">
                <h2>Nossos serviços</h2>
                <Cards />
            </section>
        )
    }
}

export default About 