const LoopState = {
    PAUSE: { toggle: () => LoopState.RESUME, isPlayAllowed: false },
    RESUME: { toggle: () => LoopState.PAUSE, isPlayAllowed: true }
}

export default LoopState
