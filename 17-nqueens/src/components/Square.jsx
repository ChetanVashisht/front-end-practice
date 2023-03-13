import React from 'react'

export default function Square({ square, colour, handleClick, disabled }) {
    const { piece, id } = square
    return (
        <button className={`${colour} square tooltip`} id={id} onClick={handleClick} disabled={disabled}>
            {piece && <div className='piece'></div>}
        </button>
    )
}
