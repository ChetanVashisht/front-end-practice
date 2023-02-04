import React, { useState, useEffect } from 'react'
import states from './states'
import Conf from "./confetti"

const ascendingOrder = (a, b) => a > b ? 1 : -1
const hasDuplicates = (arr) => new Set(arr).size !== arr.length
const identity = x => x
const add = (x, y) => x + y

function App() {
    const rng = () => Math.floor(Math.random() * size * size)
    const createMines = (size) => {
        const gen = [...Array(size)].map(rng).sort(ascendingOrder)
        return hasDuplicates(gen) ? createMines(size) : gen
    }

    const startNewGame = () => {
        setMines(createMines(mineCount))
        setGameState(states.START)
        setField(newField)
    }
    const [size, setSize] = useState(10)
    const [mineCount, setMineCount] = useState(3)
    const [mines, setMines] = useState(createMines(mineCount))
    const [gameState, setGameState] = useState(states.START)

    const createGrid = (size) => Array(size).fill(Array(size).fill({ isDiscovered: false, isMine: false, isFlagged: false }))
    const enumCell = (rowNo) => (cell, index) => ({ ...cell, id: (rowNo * 10 + index) })
    const addIds = (row, rowNo) => (row.map(enumCell(rowNo)))

    const toggleRequiredCell = (id, prop) => c => c.id === id ? { ...c, [prop]: !c[prop] } : c
    const toggleRequiredCells = (ids, prop) => c => ids.includes(c.id) ? { ...c, [prop]: !c[prop] } : c
    const setRequiredCells = (ids, prop, value) => c => ids.includes(c.id) ? { ...c, [prop]: value } : c

    const addMines = row => row.map(toggleRequiredCells(mines, "isMine"))
    const newField = () => createGrid(10).map(addIds).map(addMines)
    const [field, setField] = useState(newField)

    const toggleCellInField = (cell, prop) => (field) => field.map(row => row.map(toggleRequiredCell(cell.id, prop)))
    const toggleDiscovered = (cell) => setField(toggleCellInField(cell, "isDiscovered"))
    const toggleFlagged = (cell) => setField(toggleCellInField(cell, "isFlagged"))

    const revealMinesInRow = row => row.map(setRequiredCells(mines, "isDiscovered", true))
    const revealMines = field => field.map(revealMinesInRow)

    const gameLossHook = () => { setField(revealMines) }
    const gameStartHook = () => { setGameState(states.IN_PROGRESS) }
    const gameWonHook = () => { }

    const runGameStateHook = () => {
        switch (gameState) {
            case states.LOST: gameLossHook()
        }
    }
    useEffect(runGameStateHook, [gameState])

    const setUpField = () => setField(newField)
    useEffect(setUpField, [mines])

    const gameIsWon = (clickedCell) => {
        const minesDetectedFn = (row) => row.map(cell => cell.isMine && cell.isFlagged)
            .filter(identity).map(x => 1).reduce(add, 0)
        const count = field.map(minesDetectedFn).reduce(add, 0)

        const last = clickedCell.isMine ? 1 : 0
        return count + last == mineCount
    }

    const processCellClick = (cell) => () => {
        toggleDiscovered(cell)
        if (gameState == states.START) setGameState(states.IN_PROGRESS)
        if (cell.isMine) setGameState(states.LOST)
    }

    const processFlagging = (cell) => (e) => {
        e.preventDefault()
        toggleFlagged(cell)
        if (gameIsWon(cell)) setGameState(states.WON)
    }

    const getClassNames = (cell) => {
        return `
            cell
            ${cell.isDiscovered ? 'discovered' : 'hidden'}
            ${cell.isFlagged ? 'flagged' : ''}
            ${cell.isMine && !cell.isFlagged && cell.isDiscovered ? 'mine' : ''}
        `
    }


    const renderCell = (cell) => (
        <button
            className={getClassNames(cell)}
            key={cell.id}
            onClick={processCellClick(cell)}
            onContextMenu={processFlagging(cell)} >
        </button>)
    const renderRow = (row, i) => (<div className="row" key={i}> {row.map(renderCell)}</div>)
    return (
        <main>
            {field.map(renderRow)}
            {[states.START, states.IN_PROGRESS].includes(gameState) && <img src="./src/assets/sad.svg" disabled={true} className="pic disabled" />}
            {gameState === states.WON && <img src="./src/assets/smily.svg" onClick={startNewGame} className="pic" />}
            {gameState === states.WON && <Conf />}
            {gameState === states.LOST && <img src="./src/assets/lost.svg" onClick={startNewGame} className="pic" />}
        </main>
    )
}

export default App
