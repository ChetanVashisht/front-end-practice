import React from 'react'
import { useContext } from 'react'
import { CartContext } from './Cart'
import Row from './Row'

export default function CartPage() {
    const { cart, removeFromCart, emptyCart } = useContext(CartContext)
    const renderCartItem = (item, i) => <Row image={item} removeFromCart={removeFromCart} key={i} />
    return (
        <main>
            {cart.map(renderCartItem)}
            <button onClick={emptyCart} className="clear-cart"> Clear Cart </button>
        </main>
    )
}
