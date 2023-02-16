import React from 'react'
import { useState } from 'react'
import projects from '../assets/project-data'
import arrow from '../assets/arrow.svg'
import Project from './Project'
import { Link } from "react-router-dom"

const incmod = (i, m) => ((i + 1) % m)
const decmod = (i, m) => ((m + i - 1) % m)

/**
   This needs to be done better
   Currently it cannot be animated
 **/

export default function ProjectsCarousel() {
    const [trackedFrames, setTrackedFrames] = useState([0, 1, 2])

    const incTrackedFrames = () => setTrackedFrames(trackedFrames.map(i => incmod(i, projects.length)))
    const decTrackedFrames = () => setTrackedFrames(trackedFrames.map(i => decmod(i, projects.length)))

    const renderImages = (project, index) => (<Project project={project} key={index} />)
    const images = projects.map(renderImages)
    const chooseImage = (index) => images[index]

    return (
        <section>
            <Link to="/projects"><h2>Projects</h2></Link>
            <div className='carousel'>
                <img onClick={decTrackedFrames} src={arrow} className='arrow arrow-left' />
                {trackedFrames.map(chooseImage)}
                <img onClick={incTrackedFrames} src={arrow} className='arrow' />
            </div>
        </section>
    )
}
