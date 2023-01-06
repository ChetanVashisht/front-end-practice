import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import data from './assets/data'

import Navbar from './components/Navbar'
import Cards from './components/Cards'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Navbar />
        <Cards data={data} />
    </React.StrictMode>,
)
