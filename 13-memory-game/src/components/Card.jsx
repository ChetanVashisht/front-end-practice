import React from 'react'

const dummy = _ => { }
export default function Card({ card, handleClick }) {
    const cardClasses = card => (card.done ? 'done' : card.show ? 'active' : 'none')
    const imageClasses = card => (card.done ? 'done-image' : card.show ? 'show' : 'hide')
    const clickFn = card => ((card.done || card.show) ? dummy : handleClick)
    return (
        <div className={`card ${cardClasses(card)}`} onClick={clickFn(card)} disabled={card.done || card.show}>
            <img src={card.img} className={imageClasses(card)} />
        </div>
    )
}
