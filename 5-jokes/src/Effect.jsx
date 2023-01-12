import React from 'react'

export default function Effect() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)

    console.log("Component rerendered")
    /**
     * Quiz:
     * 1. What will happen if I put back our Star Wars API call
     *    into the effect function?
     * 2. How will the useEffect be different if I use
     *    setStarWarsData() instead of console.log()
     * 3. What SHOULD be in our dependencies array in this case?
     */
    React.useEffect(function () {
        console.log("Use Effect Ran")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [])

    const identity = (x) => x
    const inc = (x) => x + 1

    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(inc)}>Add</button>
        </div>
    )
}
