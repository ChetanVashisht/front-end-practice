import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { newBoard } from '../Board'
import Chessboard from './Chessboard'

export default function Home() {
    const [boardSize, setBoardSize] = useState(8)
    const updateBoardSize = (e) => setBoardSize(e.target.value)

    const [board, setBoard] = useState(newBoard(boardSize))
    const updateBoard = () => setBoard(newBoard(boardSize))
    useEffect(updateBoard, [boardSize])

    return (
        <section>
            <h1> Welcome to n Queens </h1>
            <input type="range" min={5} max={9} onChange={updateBoardSize} name="boardSize" value={boardSize} />
            <Chessboard board={board} boardSize={boardSize} />
            <Link to={`/solutions/${boardSize}`}> <button>Generate Solutions</button> </Link>
        </section>
    )
}
