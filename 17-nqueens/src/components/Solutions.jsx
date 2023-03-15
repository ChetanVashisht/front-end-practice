import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { CALCULATE_POSITIONS } from '../Board';
import Chessboard from './Chessboard'
import Worker from "../worker.js?worker";
const worker = new Worker()

export default function Solutions({ boards, boardSize }) {
    const [hasComputed, setHasComputed] = useState(false)
    const [onClicks, setOnClicks] = useState(null)
    const [solution, setSolution] = useState(null)
    document.documentElement.style.setProperty('--board-size', boardSize)
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]

    const setup = () => {
        if (boards) {
            setHasComputed(true)
            setSolution(getRandom(boards))
            new Promise((resolve) => {
                worker.onmessage = ({ data }) => resolve(data)
                worker.postMessage({ message: CALCULATE_POSITIONS, data: { size: boardSize, boards: boards } })
            }).then(setOnClicks)
        }
    }
    useEffect(setup, [boards])
    const solutionFinder = (square) => () => {
        const potentialBoards = onClicks[square.id]
        setSolution(getRandom(potentialBoards))
    }
    const getClicks = () => onClicks
    const renderBoard = (board) => (<Chessboard board={board} boardSize={boardSize} key={boardSize} handleClick={solutionFinder} getClicks={getClicks} />)

    return (
        <section>
            <div className='solutions'>
                {!hasComputed && <span className="loader" />}
                {hasComputed && renderBoard(solution)}
            </div>
        </section>
    )
}
