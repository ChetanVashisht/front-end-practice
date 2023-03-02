import React from 'react'
import { Link } from "react-router-dom"
import Cart from "../assets/cart.svg"

export default function Header() {
    return (
        <nav>
            <Link to="/" className='nav-left'><h2>Pic Some</h2></Link>
            <Link to="/cart" className='nav-right'><img src={Cart} className="cart" /></Link>
        </nav>
    )
}
