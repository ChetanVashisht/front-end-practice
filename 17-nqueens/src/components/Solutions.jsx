import React from 'react'
import Chessboard from './Chessboard'

export default function Solutions({ boards, boardSize }) {

    document.documentElement.style.setProperty('--board-size', boardSize)
    const renderBoard = (board, i) => (<Chessboard board={board} boardSize={boardSize} key={i} />)

    return (
        <section>
            <div className='solutions'>
                {boards.map(renderBoard)}
            </div>
        </section>
    )
}
