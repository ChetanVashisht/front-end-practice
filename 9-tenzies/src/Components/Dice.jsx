import React from 'react'

export default function Dice({ isFrozen, display, handleClick }) {
    return (
        <div className={`dice ${isFrozen ? 'green' : 'white'}`} onClick={handleClick}>
            <span>{display}</span>
        </div>
    )
}
