import React from 'react'
import { Link } from 'react-router-dom'

export default function Project({ project }) {
    const getBackgroundStyle = (project) => ({ backgroundImage: `url(${project.picture}) ` })
    const getSlug = (project) => project.name.replaceAll(/[\s,]+/g, '-')
    return (
        <Link to={`/projects/${project.id}/${getSlug(project)}`}>
            <div className="carousel-size" style={getBackgroundStyle(project)} >
                <h4>{project.name}</h4>
                <h5>{project.location}</h5>
            </div>
        </Link>
    )
}
