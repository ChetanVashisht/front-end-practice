export default function Header({ left, right }) {

    return (
        <nav>
            <span>{left}</span>
            <span>{right}</span>
        </nav>
    )
}
