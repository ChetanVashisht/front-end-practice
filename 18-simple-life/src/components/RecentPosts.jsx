import React from 'react'
import posts from '../data/posts'
import Posts from './Posts'

export function RecentPostsPage() {
    return (
        <Posts withFeaturedPost={false} />
    )
}

export function RecentPostsWidget() {
    const renderPostWidget = (post, i) => (<Widget post={post} key={i} toPrintLine={!(i == 2) } />)
    return (
        <div className='widget'>
            <h2> Recent Posts </h2>
            {posts.slice(1, 4).map(renderPostWidget)}
        </div>
    )
}

function Widget ({post, toPrintLine}) {
    return (
        <div className='post-widget'>
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            {toPrintLine && <hr />}
        </div>
    )
}
