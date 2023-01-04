import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Banner'
import Card from './components/Card'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div>
            <Header />
            <Hero />
            <Card />
        </div>
    </React.StrictMode>,
)
