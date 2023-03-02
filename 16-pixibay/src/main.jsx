import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom"
import { CartContextProvider } from './components/Cart'
import { UserContextProvider } from './components/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartContextProvider><UserContextProvider>
        <Router>
            <App />
        </Router>
    </UserContextProvider></CartContextProvider>
)
