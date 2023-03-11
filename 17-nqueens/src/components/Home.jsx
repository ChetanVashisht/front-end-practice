import React from 'react'

export default function Home({ updateBoardSize, boardSize, range }) {
    return (
        <section>
            <h1> Welcome to n Queens </h1>
            <input type="range" min={range.min} max={range.max} onChange={updateBoardSize} name="boardSize" value={boardSize} />
        </section>
    )
}
