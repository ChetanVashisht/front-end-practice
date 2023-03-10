import React from 'react'

export default function Square({ square, colour }) {
    const { piece, id } = square
    return (
        <div className={`square ${colour}`} id={id}>
            {piece && <div className='piece'></div>}
        </div>
    )
}
