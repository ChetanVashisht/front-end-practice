import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Hero />
        <AboutUs />
    </React.StrictMode>
)
