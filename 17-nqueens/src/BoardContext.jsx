import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { newBoard, placeQueen, diagonals, QUEEN, rows, column as columnOf } from "./Board";


const BoardContextProvider = ({ children }) => {

        const iterateSolutions = (boardSize) => {
            const refBoard = newBoard(boardSize)

            const allRows = rows(refBoard, boardSize)
            const sol = allRows.reduce((boards, row) => {
                const newRows = row.map((sq, i) => {
                    const square = placeQueen(sq)
                    return { row: [...row.slice(0, i), square, ...row.slice(i + 1)], sq: square }
                })
                const appendedRows = boards.flatMap((board) => newRows.map(newRow => {
                    const b = board?.board === undefined ? [] : board.board
                    return { board: [...b, ...newRow.row], sq: newRow.sq }
                }))
                return appendedRows.filter(({ board, sq }) => {
                    const blocked = [...columnOf(board, sq), ...diagonals(board, sq)].filter(x => x != undefined)
                    return !blocked.reduce((acc, cell) => acc || cell.piece == QUEEN, false)
                })
            }, [[]])
            setBoards(sol.map(b => b.board))
        }

}
