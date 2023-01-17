import React from 'react'

export default function Confetti({ playAnimation }) {

    const confettiRender = (
        <div id="confettis">
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
        </div >
    )
    return playAnimation && confettiRender
}
