const doNothing = (_) => () => () => {}

const states = Object.freeze({
    SETTING_UP: {
        id: 1,
        styleFn: () => '',
        handleClick: doNothing
    }, IN_PROGRESS: {
        id: 2,
        styleFn: (option) => option.isSelected ? 'selected' : '',
        handleClick: (question, questions, setQuestions) => {
            return function (selectedOption) {
                return function () {
                    const select = (option) => option.id == selectedOption.id ?
                        { ...option, isSelected: true } : { ...option, isSelected: false }
                    const updateQuestion = (q) => {
                        return q.id === question.id ?
                            { ...q, options: q.options.map(select) } : q
                    }
                    setQuestions(questions.map(updateQuestion))
                }
            }
        }
    }, GAME_OVER: {
        id: 3,
        styleFn: (option) => option.isCorrect ? 'correct' :
            option.isSelected ? 'incorrect' : '',
        handleClick: doNothing
    }
})

export default states
