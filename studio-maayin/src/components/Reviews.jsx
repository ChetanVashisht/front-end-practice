import React from 'react'
import data from '../assets/review-data'
import Review from './Review'

export default function Reviews() {
    const renderReview = review => (<Review review={review} />)
    return (
        <section className="section">
            <h2>Reviews</h2>
            <div>
                {data.map(renderReview)}
            </div>
        </section>
    )
}
