import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./components/Home"
import Solutions from "./components/Solutions"

function App() {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/solutions/:boardSize" element={<Solutions key={Math.floor(Math.random() * 100)} />} />
            </Routes>
        </main>
    )

}

export default App
