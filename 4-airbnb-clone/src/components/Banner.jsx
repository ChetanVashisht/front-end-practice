import React from 'react'
import banner from '../assets/photo-grid.png'

export default function Banner() {
    return (
        <section className='hero'>
            <img className='hero-image' src={banner} />
            <h1 className='hero-title'> Online Experiences </h1>
            <p className='hero-catchphrase'> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
        </section>
    )
}
