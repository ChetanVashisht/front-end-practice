import React from 'react'

export default function Square({ square, colour, handleClick }) {
    const { piece, id } = square
    return (
        <div className={`square ${colour}`} id={id} onClick={() => handleClick(square.id)}>
            {piece && <div className='piece'></div>}
        </div>
    )
}
