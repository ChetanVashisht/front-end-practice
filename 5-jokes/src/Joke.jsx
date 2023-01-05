export default function Joke(props) {
    return (
        <div>
            {props.setup && <h3> Setup: <span>{props.setup}</span> </h3>}
            <p> Punchline: <span>{props.punchline}</span> </p>
            <hr />
        </div>
    )
}
