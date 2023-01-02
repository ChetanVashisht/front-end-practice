import logo from '../assets/react.svg';

export default function Body() {
    return (
        <div>
            <h1> Fun facts about React </h1>
            <ul className="list-of-facts">
                <li> Was first released in 2013 </li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={logo} className="background-logo" />
        </div>
    )
}
