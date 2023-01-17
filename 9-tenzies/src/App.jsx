import React from 'react'
import Background from './Components/Background'
import Game from './Components/Game'
import Confetti from './Components/Confetti'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {

    const [playAnimation, setPlayAnimation] = useState(false)
    const resetPlayAnimation = function () {
        if (playAnimation) setTimeout(() => setPlayAnimation(false), 2000)
    }
    const updateGameComplete = function () {
        setPlayAnimation(true)
    }
    useEffect(resetPlayAnimation, [playAnimation])

    return (
        <main>
            <Background />
            <Game updateGameComplete={updateGameComplete} />
            <Confetti playAnimation={playAnimation} />
        </main>
    )
}
