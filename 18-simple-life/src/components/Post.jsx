import React from 'react'

export default function Post({post, featured}) {
    const getClassName= () => `post ${featured ? 'featured': ''}`
    return (
        <div className={getClassName()}>
            <div className='post-image-section'>
                <img src={post.image} />
                <span>{post.date} | {post.comments} comments</span>
            </div>

            <div className='post-content-section'>
                <h3>{post.title}</h3>
                <p>{post.info}</p>
                <a href="#">continue reading</a>
                {featured && <hr />}
            </div>
        </div>
    )
}
