import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link to="/"> <h1 className='h1-nav'>Studio Maayin</h1> </Link>
        </header>
    )
}
