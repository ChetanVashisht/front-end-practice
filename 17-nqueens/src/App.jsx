import { useState } from "react"
import Worker from "./worker.js?worker";
import Solutions from "./components/Solutions"
import Home from "./components/Home"
import { useRef } from "react"
import { useEffect } from "react"
import { DISCOVER_SOLUTIONS } from "./Board";

/**
   For loading web workers, we need just tell vite about it
   as shown below, otherwise it will not bundle it in the
   production build.
   https://vitejs.dev/guide/assets.html **/

const worker = new Worker()

function App() {
    const [boardSize, setBoardSize] = useState(5)
    const range = useRef({ min: 4, max: 11 })
    const [solutions, setSolutions] = useState(null)
    const [loading, setLoading] = useState(true);

    const numberRange = (start, end) => new Array(end - start).fill().map((_, i) => i + start)
    const updateBoardSize = (e) => setBoardSize(parseInt(e.target.value))
    const setup = () => {
        /** https://stackoverflow.com/q/68233906/4110233 **/
        /** https://stackoverflow.com/q/52438273/4110233 **/
        const supportedBoardSizes = numberRange(range.current.min, range.current.max + 1)
        const promises = {}
        Promise.race(supportedBoardSizes.map((s) => {
            promises[s] = {}
            promises[s].promise = new Promise((resolve) => {
                worker.onmessage = ({ data: { size, boards } }) => {
                    promises[size].resolve({ size })
                    setSolutions(ps => ({ ...ps, [size]: boards }))
                }
                promises[s].resolve = resolve
                worker.postMessage({ message: DISCOVER_SOLUTIONS, size: s })
            })
            return promises[s].promise
        })).then(({ size }) => {
            setBoardSize(size)
            setLoading(false)
        })
    }
    useEffect(setup, [])


    return (
        <main>
            <Home updateBoardSize={updateBoardSize} boardSize={boardSize} range={range.current} />
            {!loading && <Solutions boards={solutions[boardSize]} boardSize={boardSize} key={boardSize} />}
        </main>
    )

}

export default App
