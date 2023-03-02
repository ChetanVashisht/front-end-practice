import React from 'react'
import emptyHeart from "../assets/empty-heart.svg"
import fullHeart from "../assets/full-heart.svg"
import cartImage from "../assets/cart.svg"
import negative from "../assets/negative.svg"
import { useContext } from 'react'
import { CartContext } from './Cart'
import { UserContext } from './UserContext'
import useHover from './useHover'

export default function Image({ image }) {
    const { toggleAddToCart, isInCart } = useContext(CartContext)
    const { isFavourite, toggleFavourite } = useContext(UserContext)
    const [ref, isActive] = useHover()

    const getExtraDisplay = id => {
        if (id % 5 == 0) { return "big" }
        else if (id % 6 == 0) { return "wide" }
        else { return "" }
    }
    const getFav = (fav) => fav ? fullHeart : emptyHeart
    return (
        <div className={`image ${getExtraDisplay(image.id)}`} ref={ref}>
            <img src={getFav(isFavourite(image))} className={`img-tl ${(isFavourite(image) || isActive) ? '' : 'hide'}`} onClick={toggleFavourite(image)} />
            <img src={isInCart(image) ? negative : cartImage} className={`img-tr ${isFavourite(image) || isActive? '': 'hide'}`} onClick={toggleAddToCart(image)} />
            <img src={image.url} className={`image-grid`} />
        </div>
    )
}
