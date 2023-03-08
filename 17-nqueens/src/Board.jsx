import { createContext } from "react";

const BoardContext = createContext(null)
const QUEEN = "queen"

const boardFunctions = {
}

const BoardContextProvider = ({ children }) => {
    const newBoard = (size) => Array(size * size).fill(0).map((_, i) => ({ id: i, piece: null, col: Math.floor(i / size), row: i % size }))
    const row = (board, square) => board.filter(sq => sq.col == square.col)
    const column = (board, square) => board.filter(sq => sq.row == square.row)
    const diagonals = (board, square) => {
        const { col, row } = square
        const size = board.at(-1).col + 1
        const arr = []
        for (var i = 1; i < size; i++) {
            const left = row + i
            const right = row - i
            const down = col + i
            const up = col - i
            const coordinates = [[left, up], [right, up], [left, down], [right, down]]
            const isValid = (x) => x >= 0 && x < size
            const validCoordinates = coordinates.filter((([r, c]) => isValid(r) && isValid(c)))
            arr.push(...validCoordinates)
        }
        return arr.map(([r, c]) => board.at(r + c * size))
    }
    const placeQueen = (square) => ({ ...square, piece: QUEEN })
    const replaceSquares = (board, squares) => {
        return [...(board.filter(sq => !squares.some(s => s.id === sq.id))), ...squares].sort((a, b) => a.id > b.id)
    }
    return (<BoardContext.Provider value={{ newBoard, row, placeQueen, replaceSquares, column, diagonals }}>{children}</BoardContext.Provider>)
}

export { BoardContext, BoardContextProvider }
