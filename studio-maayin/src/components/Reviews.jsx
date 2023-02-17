import React from 'react'
import data from '../assets/review-data'
import Review from './Review'

export default function Reviews() {
    const renderReview = (review, i) => (<Review review={review} left={i % 2 == 0} key={i} />)
    return (
        <section className="section">
            <h2>Reviews</h2>
            <div className='alternate'>
                {data.map(renderReview)}
            </div>
        </section>
    )
}
