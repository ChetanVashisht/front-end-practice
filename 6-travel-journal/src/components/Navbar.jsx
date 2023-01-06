import globe from "../assets/globe.svg"


export default function () {
    return (
        <nav>
            <img className="nav-globe" src={globe} />
            <span className="nav-heading"> My Travel Journal</span>
        </nav>
    )
}
