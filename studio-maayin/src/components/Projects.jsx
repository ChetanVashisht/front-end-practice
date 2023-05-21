import React from 'react'
import projects from '../assets/project-data'
import Project from './Project'

export default function Projects() {
    const renderProject = (project, n) => (<Project project={project} key={n} className="project"/>)
    return (
        <main>
            <section className='section-flex'>
                <h2>Projects</h2>
                <div className='projects'>
                    {projects.map(renderProject)}
                </div>
            </section>
        </main>
    )
}
