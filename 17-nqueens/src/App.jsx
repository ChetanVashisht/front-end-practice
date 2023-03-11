import { useState } from "react"
import Solutions from "./components/Solutions"
import Home from "./components/Home"
import { useRef } from "react"
import { iterateSolutions } from "./Board"
import { useEffect } from "react"
// const worker = new Worker("./src/worker.js", { type: 'module' })
console.log(worker)


function App() {
    const [boardSize, setBoardSize] = useState(6)
    const range = useRef({ min: 4, max: 6 })
    const [solutions, setSolutions] = useState(null)
    const [loading, setLoading] = useState(true);

    const numberRange = (start, end) => new Array(end - start).fill().map((_, i) => i + start)
    const updateBoardSize = (e) => setBoardSize(parseInt(e.target.value))
    const setup = () => {
        /** https://stackoverflow.com/q/68233906/4110233 **/
        const supportedBoardSizes = numberRange(range.current.min, range.current.max + 1)
        Promise.all(supportedBoardSizes.map(s => {
            return new Promise((resolve) => resolve({ size: s, boards: iterateSolutions(s) }))
        })).then((boardsArr) => {
            const boards = boardsArr.reduce((acc, { size, boards }) => {
                acc[size] = boards
                return acc
            }, {})
            setSolutions(boards)
            setLoading(false)
        })
    }
    useEffect(setup, [])


    return (
        <main>
            <Home updateBoardSize={updateBoardSize} boardSize={boardSize} range={range.current} />
            {!loading && <Solutions boards={solutions[boardSize]} boardSize={boardSize} />}
        </main>
    )

}

export default App
