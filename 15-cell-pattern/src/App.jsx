import { useEffect } from 'react';
import { useState } from 'react'
import Cell from "./components/Cell"

function App() {
    const contents = ['snake', 'posion', 'life', null];
    const rand = (arr) => arr[(Math.random() * arr.length) | 0]
    const initCell = (_, i) => ({ index: i, contents: rand(contents) })
    const setupGrid = (size) => Array(size).fill(0).map(initCell)
    const gamesize = { h: 30, w: 20 }
    const setup = () => setupGrid(gamesize.h * gamesize.w)
    const [cells, setCells] = useState(setup)
    const renderCell = (cell) => (<Cell cell={cell} key={cell.index} />)

    const rerender = () => {
        console.log("Rendering")
        setTimeout(() => setCells(setup), 1000)
    }
    useEffect(rerender, [cells])

    return (
        <main>
            {cells.map(renderCell) }
        </main>
    )
}

export default App
