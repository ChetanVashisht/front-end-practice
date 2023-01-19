import React from "react"
import { useState } from "react"
import Question from "./Question"
import states from "./Constants"
import makeOptions from "./Options"
import { useEffect } from "react"

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

    const setUpData = function () {
        if (gameState == states.SETTING_UP) {
            fetch("https://opentdb.com/api.php?amount=5&encode=url3986")
                .then(response => response.json())
                .then(json => json.results.map(decode).map(addOptions))
                .then(setQuestions)
                .then(startQuiz)
        }
    }

    const [gameState, setGameState] = useState(states.SETTING_UP)
    const [questions, setQuestions] = useState([])
    useEffect(setUpData, [gameState])

    const completeGame = () => setGameState(states.GAME_OVER)
    const newQuiz = () => setGameState(states.SETTING_UP)
    const startQuiz = () => setGameState(states.IN_PROGRESS)

    const createNewQuiz = () => {
        setQuestions([])
        newQuiz()
    }

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
            <div className="questions">
                {questions.map(renderQuestion)}
            </div>
            {gameState === states.SETTING_UP && <h1>Loading</h1>}
            {gameState === states.IN_PROGRESS && <button className="submit" onClick={completeGame}>Submit</button>}
            {gameState === states.GAME_OVER && <button className="submit" onClick={createNewQuiz}> New Game </button>}
            {gameState === states.GAME_OVER && <p> You scored out {calculateScore(questions)} of {questions.length}</p>}
        </main>
    )
}
