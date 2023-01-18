import React from "React"
import { useState } from "react"
import allData from "../assets/data"
import Question from "./Question"
import states from "./Constants"
import makeOptions from "./Options"

export default function Quiz() {
    /** Generated from https://opentdb.com/api.php?amount=5&category=10&encode=url3986 */

    const decode = (question) => (
        {
            ...question,
            question: decodeURIComponent(question.question),
            rightAnswer: decodeURIComponent(question.correct_answer),
            wrongAnswers: question.incorrect_answers.map(decodeURIComponent)
        }
    )
    const addOptions = (question, index) => ({
        ...question,
        id: index,
        options: makeOptions(question.wrongAnswers, question.rightAnswer)
    })

    const [gameState, setGameData] = useState(states.IN_PROGRESS)
    const [questions, setQuestions] = useState(allData.results.map(decode).map(addOptions))

    const completeGame = () => setGameData(states.GAME_OVER)
    const renderQuestion = function (question, index) {
        return (
            <Question
                key={index}
                question={question}
                gameState={gameState}
                handleClick={gameState.handleClick(question, questions, setQuestions)}
            />
        )
    }
    const calculateScore = function (questions) {
        const isOptionSelected = o => o.isSelected && o.isCorrect
        const isCorrect = (o1, o2) => (o1 || o2)
        const score = (acc, q) => acc + (q.options.map(isOptionSelected).reduce(isCorrect, false) ? 1 : 0)
        return questions.reduce(score, 0)
    }
    return (
        <main className="splash">
            {questions.map(renderQuestion)}
            {gameState === states.IN_PROGRESS && <button className="submit" onClick={completeGame}>Submit</button>}
            {gameState === states.GAME_OVER && <button className="submit" onClick={completeGame}> New Game </button>}
            {gameState === states.GAME_OVER && <p> You scored out {calculateScore(questions)} of {questions.length}</p>}
        </main>
    )
}
