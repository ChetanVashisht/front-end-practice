import Header from "./components/Header"
import ImageGrid from "./components/ImageGrid"
import { Routes, Route } from "react-router-dom"
import CartPage from "./components/CartPage"

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<ImageGrid />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    )
}

export default App
