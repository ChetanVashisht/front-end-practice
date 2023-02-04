import React from 'react'
import Confetti from 'react-confetti'

export default function Conf() {
    const { innerWidth: width, innerHeight: height } = window;
    return (
        <Confetti
            width={width}
            height={height}
        />
    )
}
