import React from 'react'

export default function Cell({ cell }) {
    const getItem = (cell) => (cell.contents ? cell.contents : '')
    return (
        <div className={`cell ${getItem(cell)}`}>
        </div>
    )
}
