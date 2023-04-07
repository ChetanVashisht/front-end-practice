import React from 'react'
import aboutMeImg from "../img/about-me.jpg"

export function AboutMePage() {
    return (
        <div className='about-me'>
            <img src={aboutMeImg} alt="about-me-img" />
            <h2>My name is John and living the simple life saved my life</h2>
            <p><b>I used to be a pack rat.</b> I had so many things that I thought that I loved, but the truth was I couldn't even appreciate any of it because there was too much.</p>
            <p>Things were terrible. I had a job that I hated, a home that I didn't want to live in, and I couldn't hold a relationship.</p>

            <h3> How I turned things around</h3>
            <p><b>I was on the verge of a breakdown when I got rid of everything.</b> I literally put 90% of my possessions in the garbage, sold my place and moved into a smaller apartment, and I quit my job.</p>
            <p>It wasn't easy at all, but everything around me was in such a bad place, I didn't know what else to do. And it worked.</p>

            <h3>Now I live the simple life</h3>
            <p>Now that I'm living a simple life, things are so much better. I'm less stressed, enjoy life and work more, and I have more free time to enjoy.</p>
            <p>With how much it turned my life around, <b>I felt like I had no choice but to start sharing how I did it</b>, and how others can benefit from living a simple life as well, which is why I started this site!</p>
        </div>
    )
}

export function AboutMeWidget() {
    return (
        <div className='widget'>
            <h2>About Me</h2>
            <img src={aboutMeImg} />
            <p>I find life better, and I'm happier, when things are nice and simple.</p>
        </div>
    )
}
