export const QUEEN = "queen"
export const newBoard = (size) => Array(size * size).fill(0).map((_, i) => ({ id: i, piece: null, col: Math.floor(i / size), row: i % size }))
export const row = (board, square) => board.filter(sq => sq.col == square.col && sq.id != square.id)
export const rowWith = (board, square) => board.filter(sq => sq.col == square.col)
export const column = (board, square) => board.filter(sq => sq.row == square.row && sq.id != square.id)
export const columnWith = (board, square) => board.filter(sq => sq.row == square.row)
export const diagonals = (board, square) => {
    const { col, row } = square
    const size = board.at(-1).row + 1
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
export const placeQueen = (square) => ({ ...square, piece: QUEEN })
export const displaceQueen = (square) => ({ ...square, piece: null })
export const replaceSquares = (board, squares) => {
    return [...(board.filter(sq => !squares.some(s => s.id === sq.id))), ...squares].sort((a, b) => a.id > b.id)
}
export const columns = (board, boardSize) => {
    const arr = []
    for (var i = 0; i < boardSize; i++) {
        const col = columnWith(board, board.at(i))
        arr.push(col)
    }
    return arr
}

export const rows = (board, boardSize) => {
    const arr = []
    for (var i = 0; i < boardSize; i++) {
        const row = rowWith(board, board.at(boardSize * i))
        arr.push(row)
    }
    return arr
}
