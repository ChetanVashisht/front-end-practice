import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { BoardContextProvider } from './Board'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BoardContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </BoardContextProvider>
    </React.StrictMode>,
)
