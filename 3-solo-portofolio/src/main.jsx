import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Photo from './components/Photo'
import Info from './components/Info'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Photo />
        <Info />
        <Footer />
  </React.StrictMode>,
)
