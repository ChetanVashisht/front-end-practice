import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import HowWeWork from "./components/HowWeWork"
import Reviews from "./components/Reviews"
import ContactUs from "./components/ContactUs"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Hero />
        <AboutUs />
        <HowWeWork />
        <Reviews />
        <ContactUs />
    </React.StrictMode>
)
