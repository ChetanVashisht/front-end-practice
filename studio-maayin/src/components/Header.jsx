import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link className='no-highlight' to="/"> <h1>Studio Maayin</h1> </Link>
        </header>
    )
}
