import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { column, diagonals, newBoard, placeQueen, replaceSquares, row } from '../Board'
import { BoardContext } from '../BoardContext'
import Chessboard from './Chessboard'

export default function Solutions() {
    const { boardSize: urlParam } = useParams()
    const { board, boardSize, setBoardSize, setBoard } = useContext(BoardContext)

    useEffect(() => {
        setBoardSize(parseInt(urlParam))
    }, [])

    const populateQueens = (sq = 36) => {
        const nb = newBoard(boardSize)
        const square = nb.at(sq)
        const firstRow = row(nb, square).map(placeQueen)
        const firstColumn = column(nb, square).map(placeQueen)
        const diags = diagonals(nb, square).map(placeQueen)
        setBoard(replaceSquares(replaceSquares(replaceSquares(nb, firstRow), firstColumn), diags))
    }

    return (
        <section>
            <Link to="/"><button>Home</button></Link>
            <Chessboard board={board} boardSize={parseInt(boardSize)} handleClick={populateQueens} />
        </section>
    )
}
