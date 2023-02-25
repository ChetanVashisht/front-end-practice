import React from 'react'
import MODES from "../modes"

export default function DifficultyBar({ setMode }) {
    const renderMode = (mode, i) => (<button onClick={setMode(mode)} key={i}>{mode}</button>)
    return (
        <div className='fullwidth row'>
            {Object.keys(MODES).map(renderMode)}
        </div>
    )
}
