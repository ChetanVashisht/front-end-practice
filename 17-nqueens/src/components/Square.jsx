import React from 'react'

export default function Square({ square, colour, handleClick, disabled }) {
    const { piece, id } = square
    return (
        <button className={`${colour} square`} id={id} onClick={handleClick} disabled={disabled}>
            {disabled && <span data-tooltip="I am a tooltip" className='tooltip-base' />}
            {piece && <div className='piece'></div>}
        </button>
    )
}
