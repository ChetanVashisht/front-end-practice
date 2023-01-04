import React from 'react'
import airbnbLogo from '../assets/airbnb-logo.png'

export default function Header() {
    return (
        <nav>
            <img src={airbnbLogo} className="nav-logo" />
        </nav>
    )
}
