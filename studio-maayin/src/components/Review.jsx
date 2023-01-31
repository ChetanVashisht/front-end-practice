import React from 'react'

export default function Review({ review }) {
    return (
        <div className="horizontal-block">
            <q> {review.review} </q>
            <div>- <span>{review.name}</span>, <span>{review.designation}</span></div>
        </div>
    )
}
