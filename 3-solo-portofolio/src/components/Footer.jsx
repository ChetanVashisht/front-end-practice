import React from 'react'
import twitterLogo from '../assets/twitter.svg'
import fbLogo from '../assets/facebook.svg'
import instaLogo from '../assets/instagram.svg'
import githubLogo from '../assets/github.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <img src={twitterLogo} className="icon" />
            <img src={fbLogo} className="icon" />
            <img src={instaLogo} className="icon" />
            <img src={githubLogo} className="icon" />
        </div>
    )
}
