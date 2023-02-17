import React from 'react'
import { useParams } from 'react-router-dom'
import projects from '../assets/project-data'

export default function ProjectPage() {
    const { id } = useParams()
    const project = projects.find(project => project.id == id)
    const renderImages = (image, i) => (<img src={image.img} key={i} />)

    return (
        <section>
            <div>
                <h3> {project.type} </h3>
                <h1> {project.name} </h1>
                <h3> {project.date} </h3>
                <p> {project.description} </p>
            </div>
            <section>{project.images.map(renderImages)}</section>
        </section>
    )
}
