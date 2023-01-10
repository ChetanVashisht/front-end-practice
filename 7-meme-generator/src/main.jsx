import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar'
import MemeForm from './components/MemeForm'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Navbar />
        <MemeForm />
    </React.StrictMode>,
)
