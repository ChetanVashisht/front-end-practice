import React from 'react'
import Post from './Post'
import posts from "../data/posts"

export default function Posts({withFeaturedPost}) {
    const renderPost = (post, i) => <Post post={post} featured={withFeaturedPost && i==0 } key={i} />
    return <>{posts.map(renderPost)}</>
}
