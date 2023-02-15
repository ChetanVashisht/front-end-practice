import React from 'react'
import { useState } from 'react'
import projects from '../assets/project-data'
import arrow from '../assets/arrow.svg'

const incmod = (i, m) => ((i + 1) % m)
const decmod = (i, m) => ((m + i - 1) % m)

/**
   This needs to be done better
   Currently it cannot be animated
   A better way is to render all the images and rotate the expected ones into sight
 **/
/*
 * export default function ProjectsCarousel() {
*     const [trackedFrames, setTrackedFrames] = useState([0, 1, 2])
*
 *     const incTrackedFrames = () => setTrackedFrames(trackedFrames.map(i => incmod(i, projects.length)))
*     const decTrackedFrames = () => setTrackedFrames(trackedFrames.map(i => decmod(i, projects.length)))
*
 *     const getBackgroundStyles = (index) => ({ backgroundImage: `url(${projects[index].picture}) ` })
*     const renderImg = (index) => {
*         const item = projects[index]
*         return (
*             <div className="carousel-size" style={getBackgroundStyles(index)} key={index} >
*                 <h4>{item.name}</h4>
*                 <h5>{item.location}</h5>
*             </div>
*         )
*     }
*
 *     return (
*         <section>
*             <h2>Projects</h2>
*             <div className='carousel'>
*                 <img onClick={decTrackedFrames} src={arrow} className='arrow arrow-left' />
*                 {trackedFrames.map(renderImg)}
*                 <img onClick={incTrackedFrames} src={arrow} className='arrow' />
*             </div>
*         </section>
*     )
* }
*  */

export default function ProjectsCarousel() {
    const [trackedFrames, setTrackedFrames] = useState([0, 1, 2])

    const incTrackedFrames = () => setTrackedFrames(trackedFrames.map(i => incmod(i, projects.length)))
    const decTrackedFrames = () => setTrackedFrames(trackedFrames.map(i => decmod(i, projects.length)))

    const getBackgroundStyle = (project) => ({ backgroundImage: `url(${project.picture}) ` })

    const renderImages = (project, index) => (
        <div className="carousel-size" style={getBackgroundStyle(project)} key={index} >
            <h4>{project.name}</h4>
            <h5>{project.location}</h5>
        </div>
    )
    const images = projects.map(renderImages)
    const chooseImage = (index) => images[index]

    return (
        <section>
            <h2>Projects</h2>
            <div className='carousel'>
                <img onClick={decTrackedFrames} src={arrow} className='arrow arrow-left' />
                {trackedFrames.map(chooseImage)}
                <img onClick={incTrackedFrames} src={arrow} className='arrow' />
            </div>
        </section>
    )
}
