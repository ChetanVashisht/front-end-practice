import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./home"
import ContactUs from "./components/ContactUs"
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Projects from "./components/Projects"
import ScrollToTop from "./components/ScrollToTop"
import ProjectPage from "./components/ProjectPage"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Router>
        <ScrollToTop>
        </ScrollToTop>
        <Routes>
            <Route path="/projects/*" element={<Header />} />
        </Routes>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route path="/projects/:id/:slug" element={<ProjectPage />} />
        </Routes>
        <ContactUs />
    </Router>
)
