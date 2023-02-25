import React from 'react'

export default function Cell({ cell }) {
    const getItem = (cell) => (cell.content ? cell.content.content : '')
    return (
        <div className={`cell ${getItem(cell)}`} id={cell.id}>
        </div>
    )
}
