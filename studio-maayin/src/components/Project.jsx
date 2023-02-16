import React from 'react'

export default function Project({ project }) {
    const getBackgroundStyle = (project) => ({ backgroundImage: `url(${project.picture}) ` })
    return (
        <div className="carousel-size" style={getBackgroundStyle(project)} >
            <h4>{project.name}</h4>
            <h5>{project.location}</h5>
        </div>
    )
}
