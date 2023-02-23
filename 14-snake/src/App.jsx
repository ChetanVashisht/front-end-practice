import { useEffect } from 'react'
import { useState } from 'react'
import { place, remove } from './cellFunctions'
import Cell from "./components/Cell"
import contents from "./things"
import Directions from "./directions"
import LoopState from "./loopState"
import { chooseRandom, delay, last, toggle } from './functions'
import { useRef } from 'react'

function App() {
    const initCell = (_, i) => ({ id: i, content: null })
    const setupGrid = (size) => Array(size).fill(0).map(initCell)

    const [gamesize, setGamesize] = useState({ h: 30, w: 20 })
    const gameElement = useRef(null)

    const newBoard = () => setupGrid(gamesize.h * gamesize.w)
    const [board, setBoard] = useState(newBoard)

    const spawnThings = (board, snake, quantity, contents) => {
        const remainingCells = remove(board, snake.location)
        const location = chooseRandom(remainingCells, quantity).map(x => x.id)
        return {location: location, contents: contents}
    }
    const spawnNewLife = (board, snake, quantity) => spawnThings(board, snake, quantity, contents.LIFE)
    const spawnNewPosion = (board, snake, quantity) => spawnThings(board, snake, quantity, contents.POSION)

    const [snake, setSnake] = useState({ location: [3, 4, 5, 6, 7], contents: contents.SNAKE })
    const [life, setLife] = useState(spawnNewLife(board, snake, 10))
    const [direction, setDirection] = useState(Directions.RIGHT)
    const [loopState, setLoopState] = useState(LoopState.RESUME)

    const getNextCell = (dir, snake) => {
        const l = last(snake.location)
        const { h, w } = gamesize
        const y = Math.floor(l / w)
        const x = l % w
        switch (dir) {
            case Directions.RIGHT: return y * w + (x + 1) % w
            case Directions.LEFT: return y * w + (x + w - 1) % w
            case Directions.DOWN: return x + w * ((y + 1) % h)
            case Directions.UP: return x + w * ((h + y - 1) % h)
        }
    }
    const handleKeyPress = (e) => {
        e.key == " " ? setLoopState(loopState.toggle()) : updateDirection(e)
    }
    const updateDirection = (e) => {
        const findNewDir = dir => e.key === Directions[dir].key
        const newDirection = Directions[Object.keys(Directions).find(findNewDir)]
        if (newDirection != direction.disallowedDir() && loopState.isPlayAllowed) setDirection(newDirection)
    }
    const gameloop = () => {
        const next = getNextCell(direction, snake)
        if (life.location.includes(next)) {
            setSnake(() => ({ ...snake, location: [...snake.location, next] }))
            setLife(pl => ({ ...pl, location: pl.location.filter(l => l != next) }))
        } else {
            setSnake(() => ({ ...snake, location: [...(snake.location.slice(1)), next] }))
        }
        let updatedBoard = place(newBoard(), life)
        updatedBoard = place(updatedBoard, snake)
        setTimeout(() => {
            if (loopState.isPlayAllowed)
                setBoard(updatedBoard)
        }, 40)
    }
    useEffect(gameloop, [board, loopState])
    useEffect(() => {
        const click = _ => { gameElement.current.focus() }
        setTimeout(click, 200)
    }, [])

    const renderCell = (cell) => (<Cell cell={cell} key={cell.index} />)
    return (
        <main onKeyUp={handleKeyPress} tabIndex={-1} ref={gameElement}>
            {board.map(renderCell)}
        </main>
    )
}

export default App
