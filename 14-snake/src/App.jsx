import { useEffect } from 'react'
import { useState } from 'react'
import { place, remove } from './cellFunctions'
import Cell from "./components/Cell"
import contents from "./things"
import Directions from "./directions"
import { chooseRandom, delay, last, toggle } from './functions'
import { useRef } from 'react'
import GameState from './loopState'
import DifficultyBar from './components/DifficultyBar'
import MODES from "./modes"
import Info from "./components/Info"

function App() {
    const initCell = (_, i) => ({ id: i, content: null })
    const setupGrid = (size) => Array(size).fill(0).map(initCell)

    const [gamesize, setGamesize] = useState({ h: 30, w: 20 })
    const gameElement = useRef(null)

    const newBoard = () => setupGrid(gamesize.h * gamesize.w)
    const [board, setBoard] = useState(newBoard)

    const spawnThings = (board, occupied, quantity, contents) => {
        const remainingCells = remove(board, occupied)
        const spawnLocations = chooseRandom(remainingCells, quantity).map(x => x.id)
        return { location: spawnLocations, contents: contents }
    }
    const afterId = (id) => c => c.id > id
    const spawnNewLives = (board, snake, quantity) => spawnThings(board.filter(afterId(gamesize.w)), snake.location, quantity, contents.LIFE)
    const spawnNewPosion = (board, snake, life, quantity) => spawnThings(board.filter(afterId(gamesize.w)), [...snake.location, ...life.location], quantity, contents.POSION)

    const newSnake = () => ({ location: [3, 4, 5, 6, 7], contents: contents.SNAKE })

    const [difficulty, setDifficulty] = useState(MODES.DIABOLIC)
    const [snake, setSnake] = useState(newSnake)
    const [life, setLife] = useState(spawnNewLives(board, snake, difficulty.life))
    const [posion, setPosion] = useState(spawnNewPosion(board, snake, life, difficulty.posion))
    const [direction, setDirection] = useState(Directions.RIGHT)
    const [gameState, setGameState] = useState(GameState.PLAY)
    const [isDirUpdateAllowed, setIsDirUpdateAllowed] = useState(true)

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
        switch (e.code) {
            case "Space":
                gameState == GameState.LOST ? newGame() : setGameState(gameState.toggle())
                break;
            case "KeyH":
            case "KeyD":
            case "KeyE":
            case "KeyM":
                if (!gameState.isPlayAllowed) {
                    const modeMap = Object.keys(MODES).reduce((acc, m) => {
                        const key = MODES[m].key
                        acc[key] = m
                        return acc
                    } , {})
                    setMode(modeMap[e.key])()
                }
                break;
            case "ArrowUp":
            case "ArrowDown":
            case "ArrowLeft":
            case "ArrowRight":
                updateDirection(e)
        }
    }
    const updateDirection = (e) => {
        const findNewDir = dir => e.key === Directions[dir].key
        const newDirection = Directions[Object.keys(Directions).find(findNewDir)]
        if (newDirection != direction.disallowedDir() && gameState.isPlayAllowed && newDirection != direction && isDirUpdateAllowed) {
            setIsDirUpdateAllowed(toggle)
            setDirection(newDirection)
            setTimeout(() => setIsDirUpdateAllowed(true), difficulty.timer)
        }
    }
    const gameloop = () => {
        const next = getNextCell(direction, snake)
        if (life.location.includes(next)) {
            const spawnNewLife = (next) => (pl) => {
                const existingLives = pl.location.filter(l => l != next)
                const remainingCells = remove(board, [...snake.location, ...existingLives])
                const newLife = chooseRandom(remainingCells, 1).map(x => x.id)
                return { ...pl, location: [...existingLives, ...newLife] }
            }
            setSnake(() => ({ ...snake, location: [...snake.location, next] }))
            setLife(spawnNewLife(next))
        } else if (snake.location.includes(next) || posion.location.includes(next)) {
            setGameState(GameState.LOST)
        } else {
            setSnake(() => ({ ...snake, location: [...(snake.location.slice(1)), next] }))
        }
        let updatedBoard = place(newBoard(), life)
        updatedBoard = place(updatedBoard, posion)
        updatedBoard = place(updatedBoard, snake)
        updatedBoard = place(updatedBoard, { location: next, contents: contents.NEXT })
        setTimeout(() => {
            if (gameState.isPlayAllowed) { setBoard(updatedBoard) }
        }, difficulty.timer)
    }
    const newGame = () => {
        const aNewBoard = newBoard()
        const aNewSnake = newSnake()
        setBoard(aNewBoard)
        setSnake(aNewSnake)
        setLife(spawnNewLives(board, snake, difficulty.life))
        setPosion(spawnNewPosion(board, snake, life, difficulty.posion))
        setGameState(GameState.PLAY)
        setDirection(Directions.RIGHT)
        activateGame()
    }

    useEffect(gameloop, [board, gameState])
    const activateGame = () => {
        const click = _ => { gameElement.current.focus() }
        setTimeout(click, 200)
    }
    useEffect(newGame, [difficulty])

    const renderCell = (cell) => (<Cell cell={cell} key={cell.id} />)
    const setMode = (mode) => () => setDifficulty(MODES[mode])
    return (
        <>
            <Info classes={`fullwidth ${gameState.showBtn ? '' : 'hide'}`} gameState={gameState}></Info>
            <DifficultyBar setMode={setMode}></DifficultyBar>
            <main onKeyUp={handleKeyPress} tabIndex={-1} ref={gameElement}>
                {board.map(renderCell)}
            </main>
            <button className={`fullwidth ${gameState.showBtn ? '' : 'hide'}`} onClick={newGame}>NEWGAME</button>
        </>
    )
}

export default App
