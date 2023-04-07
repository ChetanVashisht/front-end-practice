import React from 'react'
import { RecentPostsWidget } from './RecentPosts'
import { AboutMeWidget } from './AboutMe'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className=''>
            <Routes>
                <Route path="" element={<AboutMeWidget />} />
                <Route path="about-me" element={<></>} />
                <Route path="recent-posts" element={<AboutMeWidget />} />
            </Routes>
            <RecentPostsWidget />
        </div>
    )
}
