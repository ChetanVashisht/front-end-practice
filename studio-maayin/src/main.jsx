import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./home"
import ContactUs from "./components/ContactUs"
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Projects from "./components/Projects"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route path="/projects/:title" element={<Projects />} />
        </Routes>
        <ContactUs />
    </Router>
)
