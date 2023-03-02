import React from 'react'
import minus from '../assets/negative.svg'

export default function Row({ image, removeFromCart }) {
    return (
        <div className='row'>
            <img src={image.url} className="row-left" />
            <img src={minus} className="row-right" onClick={() => removeFromCart(image)} />
        </div>
    )
}
