import React from 'react'
import emailLogo from '../assets/Icon.svg'
import linkedInLogo from '../assets/LinkedIn.svg'

export default function Info() {
    return (
        <div className='infocard'>
            <h1 className='infocard-header'>Laura Smith</h1>
            <h2 className='infocard-occupation'>Frontend Developer</h2>
            <h3 className='infocard-website'>Laurasmith.website</h3>
            <div className='buttons'>
                <button className='email btn'>
                    <img src={emailLogo} />
                    Email
                </button>
                <button className='linkedin btn'>
                    <img src={linkedInLogo} />
                    LinkedIn
                </button>
            </div>
            <div className='infocard-details'>
                <h3 className='infocard-heading'> About </h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className='infocard-heading'> Interests </h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}
