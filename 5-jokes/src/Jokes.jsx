import Joke from "./Joke"

var jokes = [
    {
        setup: "I got my daughter a fridge for her birthday.",
        punchline: "I can't wait to see her face light up when she opens it."
    },
    {
        setup: "How did the hacker escape the police?",
        punchline: "He just ransomware!"
    },
    {
        setup: "Why don't pirates travel on mountain roads?",
        punchline: "Scurvy."
    },
    {
        setup: "Why do bees stay in the hive in the winter?",
        punchline: "Swarm."
    },
    {
        punchline: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
    }
]

export default function Jokes() {
    var renderJoke = (joke) => {
        return (<Joke setup={joke.setup} punchline={joke.punchline} />)
    }
    return <div>{jokes.map(renderJoke)}</div>
}
