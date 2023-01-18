import React from 'react'
import { useState } from 'react'
import Splash from './components/Splash'
import Quiz from "./components/Quiz"

export default function App() {
    const [hasQuizStarted, setHasQuizStarted] = useState(true)

    return (
        <div>
            {!hasQuizStarted && <Splash setStarted={setHasQuizStarted} />}
            {hasQuizStarted && <Quiz />}
        </div>
    )

}
