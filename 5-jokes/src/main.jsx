import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Jokes from './Jokes.jsx'
import Effect from './Effect'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Effect />
        <Jokes />
  </React.StrictMode>,
)
