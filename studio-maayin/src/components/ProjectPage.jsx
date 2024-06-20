import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import projects from '../assets/project-data'
import LightBox from './LightBox'
import Slider from './Slider'

/**
   useState for lightbox and slider is not working due to passed down
   onClick function to close the lightbox.

   I'm forced to use the standard workaround of using global variables.
 **/
export default function ProjectPage() {
    const { id } = useParams()
    const project = projects.find(project => project.id == id)
    const refs = project.images.map(_ => useRef(null))
    let slider;
    let lightBox;
    useEffect(() => {
        const onClick = () => lightBox.close()
        slider = Slider(refs, onClick)
        lightBox = LightBox(slider.element())
    }, []);

    const displayImage = (_, i) => () => {
        slider.goto(i)
        lightBox.show()
    }

    const setClassName = (_, i) => (__) => {
        const ref = refs[i]
        const {naturalHeight: height, naturalWidth: width} = ref.current
        const determineClass = (height, width) => {
            switch(true) {
                case ((height - width) > 200): {return 'tall'}
                case ((width - height) > 200): {return 'wide'}
                default: {return 'square'}
            }
        }
        ref.current.className = `img ${determineClass(height, width)}`;
    }
    const renderImages = (image, i) => (<img ref={refs[i]}
                                             className={`img`}
                                             src={image.img}
                                             key={i}
                                             onLoad={setClassName(image, i)}
                                             onClick={displayImage(image, i)} />)

    return (
        <main>
            <section className='project-description'>
                <div className='project-d-left'>
                    <h5> {project.type} </h5>
                    <h2> {project.name} </h2>
                    <span> {project.date} </span>
                </div>
                <p className='project-d-right'> {project.description} </p>
            </section>
            <section className='image-grid'>{project.images.map(renderImages)}</section>
        </main>
    )
}
