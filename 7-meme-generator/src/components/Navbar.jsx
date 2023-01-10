import troll from '../assets/trollFace.svg'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img className='navbar-icon' src={troll} />
            <span className='navbar-title'>Meme Generator</span>
            <div className='navbar-right'>
                <span>React Course - Project 3</span>
            </div>
        </nav>
    )
}
