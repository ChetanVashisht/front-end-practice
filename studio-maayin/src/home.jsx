import React from 'react'
import AboutUs from "./components/AboutUs"
import HowWeWork from "./components/HowWeWork"
import Reviews from "./components/Reviews"
import ProjectsCarousel from "./components/ProjectsCarousel"
import Hero from "./components/Hero"

export default function Home() {
    return (
        <>
            <Hero />
            <AboutUs />
            {/* <HowWeWork /> */}
            <ProjectsCarousel />
            <Reviews />
        </>
    )
}
