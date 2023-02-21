import { useEffect } from 'react'
import { useState } from 'react'
import { place } from './cellFunctions'
import Cell from "./components/Cell"
import contents from "./things"

function App() {
    const initCell = (_, i) => ({ id: i, content: null })
    const setupGrid = (size) => Array(size).fill(0).map(initCell)

    const [gamesize, setGamesize] = useState({ h: 30, w: 20 })
    const setup = () => setupGrid(gamesize.h * gamesize.w)
    const [board, setBoard] = useState(setup)

    const [snake, setSnake] = useState(() => [3, 4, 5, 6, 7])
    useEffect(() => {
        const next = Math.floor(Math.random() * 600)
        setSnake(() => [...snake, next])
        const updatedBoard = place(board, snake, contents.SNAKE)
        setTimeout(() => setBoard(updatedBoard), 1000)
    }, [board])

    const renderCell = (cell) => (<Cell cell={cell} key={cell.index} />)
    return (
        <main>
            {board.map(renderCell)}
        </main>
    )
}

export default App
