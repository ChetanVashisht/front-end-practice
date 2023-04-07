import React from 'react'
import { RecentPostsWidget } from './RecentPosts'
import { AboutMeWidget } from './AboutMe'

export default function SideBar() {
    return (
        <div className=''>
            <AboutMeWidget />
            <RecentPostsWidget />
        </div>
    )
}
