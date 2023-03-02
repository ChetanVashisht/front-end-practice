import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (img) => setCart([...cart, img])
    const removeFromCart = (img) => setCart(cart.filter(i => i.id != img.id))
    const emptyCart = () => setCart([])
    const isInCart = (img) => cart.some(i => i.id === img.id)
    const toggleAddToCart = (img) => () => isInCart(img) ? removeFromCart(img): addToCart(img)

    return (
        <CartContext.Provider value={{ addToCart, removeFromCart, isInCart, toggleAddToCart, emptyCart, cart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider }
