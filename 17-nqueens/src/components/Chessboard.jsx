import React from 'react'
import Square from './Square'

const isEven = (no) => no % 2 == 0
const isOdd = (no) => no % 2 == 1
export default function Chessboard({ board, boardSize, handleClick, getClicks }) {
    const getColour = (size, id) => {
        const colours = ["white", "black"]
        return isOdd(size) ? colours.at(id % 2) :
            isEven(Math.floor(id / size)) ? colours.at(id % 2) : colours.reverse().at(id % 2)
    }
    const getIsDisabled = (square) => getClicks() != null && getClicks()[square.id].length == 0
    const renderSquare = (square) => (
        <Square
            square={square}
            key={square.id}
            colour={getColour(boardSize, square.id)}
            handleClick={handleClick(square)}
            disabled={getIsDisabled(square)}
        />)

    return (
        <div className='board'>
            {board.map(renderSquare)}
        </div>
    )
}
