import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import projects from '../assets/project-data'
import * as basicLightbox from 'basiclightbox'
import * as basicSlider from './basic_slider'
import 'basicLightbox/dist/basicLightbox.min.css'
import 'basicSlider/dist/basicSlider.min.css'
import 'basicSlider/dist/themes/default.min.css'

export default function ProjectPage() {
    const { id } = useParams()
    const [lightBoxRef, setLightBoxRef] = useState();
    const project = projects.find(project => project.id == id)
    const refs = project.images.map(_ => useRef(null))
    const getSlider = (i) => {
        const elem = document.createElement('div')
        basicSlider.create(elem, refs.map(ref => `<img src=${ref.current.src} class='slider-images' />`), {index: i})
        return elem
    }
    const displayImage = (_, i) => () => {
        const ref = refs[i]
        console.log(ref.current)
        const elem = getSlider(i)
        const instance = basicLightbox.create(elem)
        setLightBoxRef(() => instance)
        instance.show()
    }
    useEffect(() => {
        const listener = () => {}
        window.addEventListener('keypress', listener);
        window.removeEventListener('keypress', listener)
    }, [lightBoxRef])

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
    const renderImages = (image, i) => (<img ref={refs[i]} className={`img`} src={image.img} key={i} onLoad={setClassName(image, i)} onClick={displayImage(image, i)} />)
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
