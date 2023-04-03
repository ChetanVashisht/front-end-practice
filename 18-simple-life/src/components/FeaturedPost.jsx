import React from 'react'
import life from "../img/life.jpg"

export default function FeaturedPost() {
    return (
        <section className="featured-post">
            <div className="">
                <span>July 23, 2019  |  3 comments </span>
                <img src={life}/>

                <h2> Finding simplicity in life </h2>

                <p>Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living. </p>

                <a className="" href="#">continue reading</a>
            </div>
        </section>
    )
}
