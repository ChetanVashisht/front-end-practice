import React from 'react'
import AboutUs from "./components/AboutUs"
import Reviews from "./components/Reviews"
import ProjectsCarousel from "./components/ProjectsCarousel"
import Hero from "./components/Hero"

export default function Home() {
    return (
        <>
            <Hero />
            <AboutUs />
            <ProjectsCarousel />
            <Reviews />
        </>
    )
}
