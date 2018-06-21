import React from 'react' 
import './Parallax.css'
import classNames from 'classnames'

export default function Parallax(props) {
    let classesDoParallax = classNames("container-parallax", props.classesDoParallax)

    return (
        <section className={classesDoParallax}>
            <h1>{props.titulo}</h1>
            {props.children}
        </section>
    )
}