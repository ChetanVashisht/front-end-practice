import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import projects from '../assets/project-data'
import * as basicLightbox from 'basiclightbox'
import 'basicLightbox/dist/basicLightbox.min.css';

export default function ProjectPage() {
    const { id } = useParams()
    /* const [imageIndex, setImageIndex] = useState(null) */
    const project = projects.find(project => project.id == id)
    const refs = project.images.map(_ => useRef(null))
    const getClasses = (i) => {
        switch (i % 10) {
            case 0: return "wide"
            case 3: return "tall"
            case 8: return "wide"
            case 9: return "tall"
            default: return ""
        }
    }
    const displayImage = (image, i) => () => {
        const ref = refs[i]
        console.log(ref.current)
        const img = `<img src=${ref.current.src} width="2000" height="2000"/>`
        basicLightbox.create(img).show()
    }
    const setClassName = (image, i) => (event) => {
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
    const renderImages = (image, i) => (<img ref={refs[i]} className={`img`} src={image.img} key={i} onLoad={setClassName(image, i)} onClick={displayImage(image, i)} />)
    /* const addImageSwiper = () => {
     *     const sides = (event) => {
     *         displayImage()
     *     }
     *     window.addEventListener('keypress', sides)
     * }
     * useEffect(addImageSwiper, [imageIndex])
     */
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
