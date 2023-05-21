import React from 'react'
import defaultImage from "../assets/sm.jpg"
import { Link } from 'react-router-dom'

export default function Project({ project, className }) {
    const getDefault = (images) => images.length === 0? defaultImage: images[0].img
    const getPic = (project) => project.picture ? project.picture: getDefault(project.images)
    const getSlug = (project) => project.name.replaceAll(/[\s,]+/g, '-')
    return (
        <Link to={`/projects/${project.id}/${getSlug(project)}`}>
            <div className='card'>
                <img src={getPic(project)} className={className} />
                <label className='card-text'>{project.name}</label>
            </div>
        </Link>
    )
}
