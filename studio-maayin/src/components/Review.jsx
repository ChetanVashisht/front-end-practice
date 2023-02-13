import React from 'react'

export default function Review({ review, left }) {
    return (
        <div className={`para horizontal-block ${left ? 'left' : 'right'}`}>
            <div><span className="capitalize">{review.name}</span>, <span>{review.designation}</span></div>
            <q>{review.review}</q>
        </div>
    )
}
