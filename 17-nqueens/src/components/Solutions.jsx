import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { BoardContext } from '../Board'
import Chessboard from './Chessboard'

export default function Solutions() {
    const { boardSize: urlParam } = useParams()
    const boardSize = parseInt(urlParam)
    const { newBoard, row, placeQueen, replaceSquares, column, diagonals } = useContext(BoardContext)
    const [board, setBoard] = useState(newBoard(boardSize) )

    const populateFirstRow = () => {
        const square = board.at(36)
        const firstRow = row(board, square ).map(placeQueen)
        const firstColumn = column(board, square).map(placeQueen)
        const diags = diagonals(board, square).map(placeQueen)
        setBoard(replaceSquares(replaceSquares(replaceSquares(board, firstRow), firstColumn), diags))
    }
    useEffect(populateFirstRow, [])

    return (
        <section>
            <Link to="/"><button>Home</button></Link>
            <Chessboard board={board} boardSize={parseInt(boardSize)} />
        </section>
    )
}
