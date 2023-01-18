export default function (wrongAnswers, rightAnswer) {
    const shuffle = function (arr) {
        return arr.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }

    const makeOptionObject = (option, index) => ({ isSelected: false, id: index, value: option, isCorrect: option === rightAnswer })

    const orderedOptions = () => [...wrongAnswers, rightAnswer].map(makeOptionObject)

    return shuffle(orderedOptions())
}
