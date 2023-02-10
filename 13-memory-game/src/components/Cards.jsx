import React from 'react'
import Card from "./Card"

export default function Cards({ cells, handleClick }) {
    const renderCard = (card) => (<Card card={card} handleClick={handleClick(card)} key={card.id} />)
    return (
        <div className="board">
            {cells.map(renderCard)}
        </div>
    )
}
