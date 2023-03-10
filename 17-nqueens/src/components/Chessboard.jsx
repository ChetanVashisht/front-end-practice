import React from 'react'
import Square from './Square'

const isEven = (no) => no % 2 == 0
const isOdd = (no) => no % 2 == 1
export default function Chessboard({ board, boardSize}) {
    const getColour = (size, id) => {
        const colours = ["white", "black"]
        return isOdd(size) ? colours.at(id % 2) :
            isEven(Math.floor(id / size)) ? colours.at(id % 2) : colours.reverse().at(id % 2)
    }
    const renderSquare = (square) => (<Square square={square} key={square.id} colour={getColour(boardSize, square.id)} />)
    document.documentElement.style.setProperty('--board-size', boardSize)

    return (
        <div className='board'>
            {board.map(renderSquare)}
        </div>
    )
}
