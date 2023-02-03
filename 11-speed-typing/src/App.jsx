import React, { useState, useEffect, useRef } from 'react'

const toggle = (x) => !x
const dec = (x) => x - 1

function App() {
    const [gameTime, setGameTime] = useState(5)
    const [time, setTime] = useState(gameTime)
    const [inProgress, setInprogress] = useState(false)
    const [words, setWords] = useState("")

    const startTiming = () => {
        if (inProgress) {
            clickRef.current.focus()
            resetWords()
            const updateTimer = () => setTime(dec)
            const intervalId = setInterval(updateTimer, 1000)
            const clearTimer = _ => clearInterval(intervalId)

            const cleanup = _ => {
                clearTimer()
                toggleStart()
                resetTimer()
            }

            setTimeout(cleanup, gameTime * 1000)
        }
    }

    const toggleStart = () => setInprogress(toggle)
    const updateGameTime = (e) => setGameTime(e.target.value)
    const resetTimer = _ => setTime(gameTime)
    const updateWords = (e) => setWords(e.target.value)
    const count = (passage) => passage.split(" ").length
    const resetWords = _ => setWords("")
    const clickRef = useRef(null)

    useEffect(resetTimer, [gameTime])
    useEffect(startTiming, [inProgress])

    return (
        <main>
            <h1>Speed Typing</h1>
            <textarea placeholder='Type here as many words as possible in the given time'
                onChange={updateWords}
                value={words}
                disabled={!inProgress}
                id="inp"
                ref={clickRef}
            />
            {!inProgress && <button onClick={toggleStart}> Start! </button>}
            {inProgress && <button disabled={true}> Type! </button>}
            <h4>Time Remaining {time}</h4>
            <h4>Run game for: <input onChange={updateGameTime} value={gameTime} type="number" /> </h4>
            <h1>Word Count: {count(words)}</h1>
        </main>
    )
}

export default App
