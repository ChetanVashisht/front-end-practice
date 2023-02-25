const GameState = {
    PAUSE: { toggle: () => GameState.PLAY, isPlayAllowed: false, showBtn: true, info:" RESUME" },
    PLAY: { toggle: () => GameState.PAUSE, isPlayAllowed: true, showBtn: false, info:" PAUSE" },
    LOST: { toggle: () => GameState.PLAY, isPlayAllowed: false, showBtn: true, info: ' Start a NEW game' }
}

export default GameState
