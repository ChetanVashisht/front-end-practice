import React from 'react'
import { useState } from 'react'
import projects from '../assets/project-data'
import arrow from '../assets/arrow.svg'
import Project from './Project'
import { Link } from "react-router-dom"

export default function ProjectsCarousel() {
    const renderImages = project => (<Project project={project} key={project.id} className="slider" />)

    return (
        <section className='section-flex'>
            <Link to="/projects"><h2>Projects</h2></Link>
            <div className='carousel'>
                <div className='carousel-roll'>
                    {projects.slice(0, 8).map(renderImages)}
                </div>
            </div>
        </section>
    )
}
