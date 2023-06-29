import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import projects from '../assets/project-data'

export default function ProjectPage() {
    const { id } = useParams()
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
    const setClassName = (image, i) => (event) => {
        const ref = refs[i];
        const {naturalHeight: height, naturalWidth: width} = ref.current;
        const determineClass = (height, width) => {
            switch(true) {
                case ((height - width) > 200): {return 'tall'}
                case ((width - height) > 200): {return 'wide'}
                default: {return 'square'}
            }
        }
        ref.current.className = `img ${determineClass(height, width)}`;
    }
    const renderImages = (image, i) => (<img ref={refs[i]} className={`img`} src={image.img} key={i} onLoad={setClassName(image, i)} />)

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
