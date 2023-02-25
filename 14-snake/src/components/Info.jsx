import React from 'react'
import GameSates from '../loopState'

export default function Info({ classes, gameState }) {
    return (
        <div>
            <p className={classes}>
                {GameSates.PAUSE === gameState ? 'Welcome to SNAKE' : 'GAMEOVER'}, <br />
                It's almost impossible to Win
            </p>
            <p>
                Press SPACE to {gameState.info}
            </p>
            <p className={classes}>
                Press (e), (m), (h) or (d) on the keyboard to set the difficulty
            </p>
        </div>
    )
}
