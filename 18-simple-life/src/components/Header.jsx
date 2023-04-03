import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="container container-nav">
                <div className="site-title">
                    <h1>Living the social life</h1>
                    <p className="subtitle">A blog exploring minimalism in life</p>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-me">About me</Link></li>
                        <li><Link to="/recent-posts">Recent posts</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
