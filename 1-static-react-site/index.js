import React from "react"
import ReactDOM from "react-dom"
import Header from "./header"
import Footer from "./footer"
import Body from "./Body"
import Title from "./Title"

function ReactPage() {
    return (
        <div>
            <Header />
            <Title />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.render(<ReactPage />, document.getElementById("root"));
