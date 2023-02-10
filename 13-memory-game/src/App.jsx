import { useLayoutEffect } from "react"
import { useState } from "react"
import imageData from "./assets/imgImports"
import Cards from "./components/Cards"
import Header from "./components/Header"

const shuffle = (unshuffled) => unshuffled
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
const updateCells = (cells, checkFn, updateFn) => cells.map(c => checkFn(c) ? updateFn(c) : c )
const inc = x => x + 1

function App() {
    const addDefaults = (obj, id) => ({ ...obj, id, show: false, done: false })
    const createCells = () => shuffle([...imageData, ...imageData]).map(addDefaults)

    const [cells, setCells] = useState(createCells)
    const [cellsTurned, setCellsTurned] = useState(0)

    const incClick = () => setCellsTurned(inc)
    const checkCellFn = (arr) => (c) => arr.includes(c)
    const toggleVisibilityCellFn = (cells) => c => ({ ...c, show: !c.show })
    const setDoneCellsFn = (cells) => c => ({ ...c, show: false, done: true })
    const setBoardState = (checkFn, updateFn) => setCells(updateCells(cells, checkFn, updateFn))

    const handleClick = (card) => () => {
        setBoardState(checkCellFn([card]), toggleVisibilityCellFn([card]))
        incClick()
    }

    const handleSecondClick = () => {
        if (cellsTurned > 0 && cellsTurned % 2 == 0) {
            const [firstCell, secondCell] = cells.filter(c => !c.done && c.show)
            const runFn = firstCell.img === secondCell.img ? setDoneCellsFn : toggleVisibilityCellFn
            setTimeout(() => setBoardState(checkCellFn([firstCell, secondCell]), runFn([firstCell, secondCell])), 500)
        }
    }

    useLayoutEffect(handleSecondClick, [cellsTurned])
    return (
        <main>
            <Header left={cellsTurned} right={cellsTurned} />
            <Cards cells={cells} handleClick={handleClick} />
        </main>
    )
}

export default App
