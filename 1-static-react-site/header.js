import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <img className="img" src="./react-logo.png" />
                <ul className="nav-right">
                    <li className="nav-item"> About </li>
                    <li className="nav-item"> Pricing </li>
                    <li className="nav-item"> Products </li>
                    <li className="nav-item"> React </li>
                </ul>
            </nav>
        </header>
    )
}
