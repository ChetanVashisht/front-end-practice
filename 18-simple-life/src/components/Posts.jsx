import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = []
    const renderPost = (post) => <Post post={post} />
    return <div>{posts.map(renderPost)}</div>
}
