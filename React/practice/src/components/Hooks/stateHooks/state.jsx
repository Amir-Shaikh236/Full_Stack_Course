// Normal javascript variables reset or vanish when a function re-runs (render).
// But react compnents are functions that re-run (re-render) whenever the user interacts with UI
// useState gives React component a persistent memory that survives re-renders.
// You must always call the updater function (e.g., setCount(5)) so React knows an update happened and triggers a re-render.
// Why it's built this way: React needs a special trigger (setCount) to know when data changes so it can update the DOM automatically.

import { useState } from "react"

export default function State() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState({
        name: '',
        age: 0,
    });

    // Disadvantage
    const handleCount = () => {
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }

    // Safe Way 
    // Component Render 1 time
    // const handleCount = () => {
    //     setCount((prev) => prev + 1)
    //     setCount((prev) => prev + 1)
    //     setCount((prev) => prev + 1)
    //     setCount((prev) => prev + 1)
    // }

    console.log('Component Rendered');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setName((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name.name)
        console.log(name.age)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="name" /><br />
                <input type="number" onChange={handleChange} name="age" /> <br />
                <button type="submit"> submit </button>
            </form>

            <div>
                <h1>{count}</h1>
                <button onClick={handleCount}>INCREMENT COUNT</button>
            </div>
        </div>
    )
}


// advantages
// 1. Simple and Readable: Very easy to read and clean for basic user interaction.
// 2. Minimal Syntax: Concise syntax without needing callback arrow function.


// Diadvantages:
// Stale state Bug in Rapid Updates:
//   Because React updates are batched, if you run setCount(count + 1) three times in a row within same handler,
//   react uses the same snapshot of count for all three.
