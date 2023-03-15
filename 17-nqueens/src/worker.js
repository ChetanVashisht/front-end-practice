import { CALCULATE_POSITIONS, DISCOVER_SOLUTIONS, iterateSolutions, newBoard, QUEEN } from "./Board"

const cache = {}
onmessage = function ({ data: { message, size, data } }) {
    // console.log(message, size, data)
    if (message == DISCOVER_SOLUTIONS) {
        this.postMessage(calculateSolutions(size))
    } else if (message == CALCULATE_POSITIONS) {
        this.postMessage(calculatePositions(data))
    }
}

const calculateSolutions = ( size ) => {
    if (!cache[size]) {
        cache[size] = iterateSolutions(size)
    }
    return ({ size, boards: cache[size] })
}

const calculatePositions = ({ size, boards }) => {
    const refBoard = newBoard(size)
    return refBoard.map(square => {
        const matchingBoard = (board, square) => {
            return board.at(square.id).piece === QUEEN
        }
        return boards.filter(board => matchingBoard(board, square))
    })
}
