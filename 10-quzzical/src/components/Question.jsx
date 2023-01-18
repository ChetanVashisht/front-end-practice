import React from "React"

export default function Question({ question, gameState, handleClick }) {
    const { options } = question

    const renderOptions = function (option) {
        return (
            <button className={`option ${gameState.styleFn(option)}`}
                onClick={handleClick(option)}
                key={option.id}>
                {option.value}
            </button>
        )
    }

    return (
        <div className="question">
            <h2>{question.question}</h2>
            <div className="options">
                {options.map(renderOptions)}
            </div>
            <hr />
        </div>
    )
}
