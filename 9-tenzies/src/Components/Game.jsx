import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Dice from "./Dice"

export default function Game({ updateGameComplete }) {

    const numberOfDice = 10;
    const rowSize = 5;

    const randInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const generateInitialState = function () {
        return Array(numberOfDice).fill(0).map((_, index) => ({ isFrozen: false, display: randInt(1, 6), id: index }))
    }

    const getState = function () {
        return JSON.parse(localStorage.getItem("state")) || generateInitialState()
    }

    const storeState = function () {
        localStorage.setItem("state", JSON.stringify(diceArray))
    }

    const updateIsGameComplete = function () {
        const val = diceArray[0].display
        const areDiceSame = (acc, dice) => acc && dice.display === val
        setIsGameComplete(diceArray.reduce(areDiceSame, true));
    }

    const runPostGameTasks = function () {
        if (isGameComplete) {
            setDiceArray(diceArray.map(dice => ({ ...dice, isFrozen: true })))
            updateGameComplete()
        }
    }


    const [diceArray, setDiceArray] = React.useState(getState)
    const [isGameComplete, setIsGameComplete] = useState(false)
    useEffect(storeState, [diceArray])
    useEffect(updateIsGameComplete, [diceArray])
    useEffect(runPostGameTasks, [isGameComplete])

    const handleClick = function (dice) {
        return function (_) {
            const toggleFreeze = (d) => d.id === dice.id ? { ...d, isFrozen: !d.isFrozen } : d
            setDiceArray(diceArray.map(toggleFreeze))
        }
    }

    const roll = function () {
        const otherThanThis = (draw) => {
            const r = randInt(1, 6)
            return r === draw ? otherThanThis(draw) : r
        }
        const rollDice = (dice) => dice.isFrozen ? dice : { ...dice, display: otherThanThis(dice.display) }
        setDiceArray(diceArray.map(rollDice))
    }

    const renderDice = (dice) => <Dice isFrozen={dice.isFrozen} display={dice.display} handleClick={handleClick(dice)} key={dice.id} />
    const renderDiceRow = (arr, i) => (<div className='row' key={i}> {arr.map(renderDice)} </div>)
    const getRow = (index) => diceArray.slice(rowSize * index, rowSize * (index + 1))
    const newGame = () => setDiceArray(generateInitialState())

    return (
        <div className="game">
            {Array(numberOfDice / rowSize).fill(0).map((_, index) => renderDiceRow(getRow(index), index))}
            {!isGameComplete && <button className="roll" onClick={roll}>Roll</button>}
            {isGameComplete && <button className="roll white" onClick={newGame}>New Game</button>}
        </div>
    )
}
