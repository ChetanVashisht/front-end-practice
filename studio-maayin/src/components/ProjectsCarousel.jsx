import React from 'react'
import projects from '../assets/project-data'
import Project from './Project'
import { Link } from "react-router-dom"

export default function ProjectsCarousel() {
    const renderImages = project => (<Project project={project} key={project.id} className="slide" />)

    return (
        <section className='section-flex'>
            <Link to="/projects"><h2>Projects</h2></Link>
            <div className='carousel-window'>
                <div className='carousel-container'>
                    {projects.slice(0, 8).map(renderImages)}
                </div>
            </div>
        </section>
    )
}
