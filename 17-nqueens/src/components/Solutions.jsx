import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
/* import { column, diagonals, newBoard, placeQueen, replaceSquares, row} from '../Board' */
import { BoardContext } from '../BoardContext'
import Chessboard from './Chessboard'

export default function Solutions() {
    const { boardSize: urlParam } = useParams()
    const { boardSize, setBoardSize, boards } = useContext(BoardContext)

    useEffect(() => {
        setBoardSize(parseInt(urlParam))
    }, [])

    /* const populateQueens = (sq = 36) => {
     *     const nb = newBoard(boardSize)
*     const square = nb.at(sq)
*     const firstRow = row(nb, square).map(placeQueen)
*     const firstColumn = column(nb, square).map(placeQueen)
*     const diags = diagonals(nb, square).map(placeQueen)
*     setRefBoard(replaceSquares(replaceSquares(replaceSquares(nb, firstRow), firstColumn), diags))
     * } */
    const renderBoard = (board, i) => (<Chessboard board={board} boardSize={boardSize} key={i} />)

    return (
        <section>
            <Link to="/"><button>Home</button></Link>
            <div className='solutions'>
                {boards.map(renderBoard)}
            </div>
        </section>
    )
}
