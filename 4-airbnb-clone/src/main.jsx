import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Hero from './components/Banner'
import Cards from './components/Cards'
import data from './data'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div>
            <Header />
            <Hero />
            <Cards jokes={data} />
        </div>
    </React.StrictMode>,
)
