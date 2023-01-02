import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from "./components/Navbar.jsx"
import Body from "./components/Body.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div>
            <Navbar/>
            <Body/>
        </div>
    </React.StrictMode>,
)
