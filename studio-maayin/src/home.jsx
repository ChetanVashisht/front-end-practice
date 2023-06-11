import React from 'react'
import AboutUs from "./components/AboutUs"
import Reviews from "./components/Reviews"
import ProjectsCarousel from "./components/ProjectsCarousel"
import Hero from "./components/Hero"
import Projects from './components/Projects'

export default function Home() {
    return (
        <main>
            <AboutUs />
            {/* <ProjectsCarousel /> */}
            {/* <Reviews /> */}
            <Projects />
        </main>
    )
}
