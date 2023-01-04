export default function Joke(props) {
    return (
        <div>
            <p> Setup: <span>{props.setup}</span> </p>
            <p> Punchline: <span>{props.punchline}</span> </p>
        </div>
    )
}
