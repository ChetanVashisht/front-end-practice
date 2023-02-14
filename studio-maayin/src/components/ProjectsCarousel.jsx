import React from 'react'
import projects from '../assets/project-data'
import Carousel from "./CarouselT"

export default function ProjectsCarousel() {
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <section>
            <h2>Projects</h2>
            <Carousel items={items} active={0} />
            {/* <div className='carousel'>
                <img className='left-back' src={src}></img>
                <img className='left-center medium' src={src}></img>
                <img className='center' src={src}></img>
                <img className='right-center medium' src={src}></img>
                <img className='right' src={src}></img>
            </div> */}
        </section>
    )
}
