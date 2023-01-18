import React from 'react'

export default function Splash({ setStarted }) {
    const updateStarted = () => setStarted(true)
    return (
        <main className='splash'>
            <h1>Quizzical</h1>
            <h3>An amazing Quiz, have a good time!</h3>
            <button className='submit' onClick={updateStarted}>Start Quiz</button>
        </main >
    )

}
