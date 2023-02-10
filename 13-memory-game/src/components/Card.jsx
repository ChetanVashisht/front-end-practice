import React from 'react'

export default function Card({ card, handleClick }) {
    const cardClasses = card => (card.done ? 'done' : card.show ? 'active' : '')
    const imageClasses = card => (card.done ? 'done-image' : card.show ? 'show' : 'hide')
    return (
        <div className={`card ${cardClasses(card)}`} onClick={handleClick} disabled={card.done || card.show}>
            <img src={card.img} className={imageClasses(card)} />
        </div>
    )
}
