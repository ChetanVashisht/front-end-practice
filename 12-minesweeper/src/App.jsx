import React, { useState, useEffect } from 'react'
import states from './states'
import Conf from "./confetti"

const ascendingOrder = (a, b) => a > b ? 1 : -1
const hasDuplicates = (arr) => new Set(arr).size !== arr.length
const identity = x => x
const add = (x, y) => x + y
const inc = x => x + 1
const dec = x => x - 1

function App() {
    const rng = () => Math.floor(Math.random() * size * size)
    const createMines = (size) => {
        const gen = [...Array(size)].map(rng).sort(ascendingOrder)
        return hasDuplicates(gen) ? createMines(size) : gen
    }

    const startNewGame = () => {
        const mines = createMines(mineCount)
        setField(newField(mines))
        setMines(mines)
        setGameState(states.START)
        setLosingCell({})
        startTimer()
        setFlagsPlaced(0)
    }
    const [size] = useState(10)
    const [mineCount] = useState(10)
    const [mines, setMines] = useState(createMines(mineCount))
    const [gameState, setGameState] = useState(states.START)
    const [losingCell, setLosingCell] = useState({})
    const [flagsPlaced, setFlagsPlaced] = useState(0)
    const [time, setTime] = useState(0)

    const createGrid = (size) => Array(size).fill(Array(size).fill({ isDiscovered: false, isMine: false, isFlagged: false }))
    const enumCell = (rowNo) => (cell, index) => ({ ...cell, id: (rowNo * size + index) })
    const addIds = (row, rowNo) => (row.map(enumCell(rowNo)))

    const toggleRequiredCell = (id, prop) => c => c.id === id ? { ...c, [prop]: !c[prop] } : c
    const setRequiredCell = (id, prop, value) => c => c.id === id ? { ...c, [prop]: value } : c
    const toggleRequiredCells = (ids, prop) => c => ids.includes(c.id) ? { ...c, [prop]: !c[prop] } : c
    const setRequiredCells = (ids, prop, value) => c => ids.includes(c.id) ? { ...c, [prop]: value } : c

    const getCellId = (cell) => ({ row: Math.floor(cell.id / size), column: cell.id % size })
    const getNeighbours = (cell, field) => {
        const { row, column } = getCellId(cell)
        const isValidCoordinate = c => (c >= 0 && c < size)
        const validCell = c => (isValidCoordinate(c[0]) && isValidCoordinate(c[1]))
        const cellIds = [-1, 0, 1].flatMap(i => [-1, 0, 1].map(j => ([row + i, column + j]))).filter(validCell)
        return cellIds.map(c => field[c[0]][c[1]]).filter(c => c != cell)
    }
    const addMineCount = (cell) => getNeighbours(cell, field).map(c => c.isMine ? 1 : 0).reduce(add, 0)
    const addMineCountToRow = (row) => row.map(cell => ({ ...cell, neighbouringMines: cell.isMine ? 0 : addMineCount(cell) }))

    const addMines = (mines) => row => row.map(toggleRequiredCells(mines, "isMine"))
    const newField = (mines) => createGrid(10).map(addIds).map(addMines(mines))
    const [field, setField] = useState(newField(mines))

    const toggleCellInField = (cell, prop) => (field) => field.map(row => row.map(toggleRequiredCell(cell.id, prop)))

    const setCellInField = (cell, prop, value) => (field) => field.map(row => row.map(setRequiredCell(cell.id, prop, value)))

    const toggleFlagged = (cell) => setField(toggleCellInField(cell, "isFlagged"))

    const revealMinesInRow = row => row.map(setRequiredCells(mines, "isDiscovered", true))
    const revealMines = field => field.map(revealMinesInRow)

    const gameLossHook = () => { setField(revealMines) }

    const runGameStateHook = () => {
        switch (gameState) {
            case states.LOST: gameLossHook()
        }
    }
    useEffect(runGameStateHook, [gameState])

    const setUpField = () => setField(() => field.map(addMineCountToRow))
    useEffect(setUpField, [mines])

    const gameIsWon = (clickedCell) => {
        const minesDetectedFn = (row) => row.map(cell => cell.isMine && cell.isFlagged)
            .filter(identity).map(_ => 1).reduce(add, 0)
        const count = field.map(minesDetectedFn).reduce(add, 0)

        const last = clickedCell.isMine ? 1 : 0
        const flagsPlaced = field.flatMap(row => row.map(cell => cell.isFlagged ? 1 : 0)).reduce(add, 0)
        return (count + last == mineCount) && (flagsPlaced + (clickedCell.isFlagged ? -1 : 1) == mineCount)
    }

    const reduceField = (field, cell) => {
        if (cell.isDiscovered || cell.isFlagged) {
            return field
        } else if (cell.neighbouringMines > 0) {
            return setCellInField(cell, "isDiscovered", true)(field)
        } else if (cell.neighbouringMines == 0) {
            return getNeighbours(cell, field).reduce((f, c) => {
                const newField = setCellInField(c, "isDiscovered", true)(f)
                return reduceField(newField, c)
            }, field)
        }
    }

    const updateTime = () => {
        if (gameState.runTimer) {
            const updateTime = () => setTime(inc)
            setTimeout(updateTime, 1000)
        }
    }
    useEffect(updateTime, [time, gameState])
    const startTimer = () => setTime(0)

    const processCellClick = (cell, field) => () => {
        if (!cell.isFlagged) {
            let updatedField = setCellInField(cell, "isDiscovered", true)(field)
            if (gameState == states.START) {
                setGameState(states.IN_PROGRESS)
                startTimer()
            }
            if (cell.isMine) {
                setGameState(states.LOST)
                setLosingCell(cell)
            } else {
                const { neighbouringMines } = cell
                if (neighbouringMines == 0) {
                    updatedField = reduceField(updatedField, cell)
                }
            }
            setField(updatedField)
        }
    }


    const processFlagging = (cell) => (e) => {
        e.preventDefault()
        toggleFlagged(cell)
        if (cell.isFlagged) setFlagsPlaced(dec)
        else if (!cell.isFlagged) setFlagsPlaced(inc)
        if (gameIsWon(cell)) {
            setGameState(states.WON)
        }
    }

    const getClassNames = (cell) => {
        return `
            cell
            color-${cell.neighbouringMines}
            ${cell.isDiscovered ? 'discovered' : 'hidden'}
            ${cell.isFlagged ? 'flagged' : ''}
            ${cell.isMine && !cell.isFlagged && cell.isDiscovered ? 'mine' : ''}
            ${losingCell.id === cell.id ? 'red' : ''}
        `
    }

    const disableRightClick = (e) => e.preventDefault()

    const minTwoDigits = (n) => ((n < 10 ? '0' : '') + n)
    const minThreeDigits = (n) => (n < 100 ? ('0' + minTwoDigits(n)) : ('' + n))

    const renderCell = (cell) => (
        <button
            className={getClassNames(cell)}
            key={cell.id}
            onClick={processCellClick(cell, field)}
            disabled={!gameState.clickAllowed}
            onContextMenu={processFlagging(cell)} >{cell.neighbouringMines}
        </button>)
    const renderRow = (row, i) => (<div className="row" key={i} onContextMenu={disableRightClick}> {row.map(renderCell)}</div>)
    return (
        <main >
            <section className='header'>
                <div className="seven-seg">{minTwoDigits(mineCount - flagsPlaced)}</div>
                <div className="seven-seg right">{minThreeDigits(time)}</div>
            </section>
            {field.map(renderRow)}
            <img src={gameState.img} onClick={startNewGame} className="pic"/>
            {gameState === states.WON && <Conf />}
        </main>
    )
}

export default App
