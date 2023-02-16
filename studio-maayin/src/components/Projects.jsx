import React from 'react'
import projects from '../assets/project-data'
import Project from './Project'
import Header from "./Header"

export default function Projects() {
    const renderProject = (project, n) => (<Project project={project} key={n} />)
    return (
        <div>
            <Header />
            <section className='section-flex'>
                <h2>Projects</h2>
                <div className='projects'>
                    {projects.map(renderProject)}
                </div>
            </section>
        </div>
    )
}
