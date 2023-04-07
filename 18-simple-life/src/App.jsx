import Header from  "./components/Header"
import Footer from  "./components/Footer"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Home from "./components/Home"
import { AboutMePage } from "./components/AboutMe"
import { RecentPostsPage } from "./components/RecentPosts"
import SideBar from "./components/SideBar"

function App() {
    return (
        <div>
            <Header />
            <div className="container container-main">
                <SideBar />
                <div className="container-main-section">
                    <Routes>
                        <Route exact path="" element={<Home />} />
                        <Route exact path="about-me" element={<AboutMePage />} />
                        <Route exact path="recent-posts" element={<RecentPostsPage />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
