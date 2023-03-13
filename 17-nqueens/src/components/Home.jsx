import React from 'react'
import { numberRange } from '../Board'

export default function Home({ updateBoardSize, boardSize, range }) {
    const isSelected = (number) => boardSize == number
    const renderInput = (number) => (
        <div key={number} onChange={updateBoardSize}>
            <input type="radio" id={number} name="input" value={number} checked={isSelected(number) ? `checked` : ``} onChange={updateBoardSize} />
            <label className={`${isSelected(number) ? 'selected' : 'not-selected'}`} htmlFor={number}>{number}</label>
        </div>
    )
    return (
        <section>
            <h1> Welcome to n Queens </h1>
            <div className="input">
                {numberRange(range.min, range.max + 1).map(renderInput)}
            </div>
        </section>
    )
}
