/*
Challenge: Starting from scratch, build and render the
HTML for our section project. Check the Google slide for
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

import React from "react"
import ReactDOM from "react-dom"

function Header() {
    return (
        <header>
            <nav className="navbar">
                <img className="img" src="./react-logo.png" />
                <ul className="nav-right">
                    <li className="nav-item"> About </li>
                    <li className="nav-item"> Pricing </li>
                    <li className="nav-item"> Products </li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function Body() {
    return (
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    )
}

function Title() {
    return (
            <h1>Fun facts about React</h1>
    )
}

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
