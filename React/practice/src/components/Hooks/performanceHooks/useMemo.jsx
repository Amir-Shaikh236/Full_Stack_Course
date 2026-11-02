// useMemo is a React hook that caches the result of an expensive calculation and recomputes it only when its dependencies change, 
// improving performance by avoiding unnecessary recalculations.
// Memoization is not free! React has to use extra memory to store the cached value and compare dependencies on every render. 
// If a calculation is cheap, using useMemo actually makes your app slightly slower due to this memory overhead.

import { useMemo, useState } from 'react'

export default function Memo() {
    const [count, setCount] = useState(0)

    const intensiveTask = (num) => {
        console.log('Task Running....')
        for (let i = 0; i < 1000000000; i++) { }
        return num * num
    }

    // const square = intensiveTask(4)
    const square = useMemo(() => intensiveTask(4), [])


    return (
        <>
            <section id="center">
                <div>
                    <h1>Get started</h1>
                </div>
                <button type="button" className="counter" onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </button>
                <button type="button" className="counter" onClick={() => setCount((count) => count + 1)}>
                    Square is {square}
                </button>
            </section>
        </>
    )
}


// Advantages
// 1. Skips Expensive Calculations.
// Saves CPU time on re-renders when filtering, sorting, or transforming large data arrays.

// Disadvantages:
// 1. Memory Overhead
// React must keep previous values and dependency arrays in browser memory. Caching too many values uses up RAM.

// 2. Slower Simple Operations
// Comparing dependency arrays on every render adds extra JavaScript code execution.
// For basic operations (like $2 + 2$ or simple string formatting), useMemo makes your app slightly slower!

// 3. Code Complexity & Stale Closure Bugs:
// If you forget a variable inside the dependency array ([data]), useMemo will return outdated (stale) results, causing hard-to-find UI bugs.

/***** REACT.MEMO *****/
// Component vs. Value Caching: Earlier, we learned that useMemo caches a calculated value inside a component.
// React.memo, on the other hand, is a Higher-Order Component (HOC) that caches an entire React Component!

// Re-rendering Rule in React:
// By default, when a parent component re-renders, all of its child components re-render too, even if their props haven't changed!

// How React.memo Optimizes:
// Wrapping a child component in React.memo tells React: "Only re-render this child component if its incoming props actually change."
// React.memo prevents unnecessary component re-renders.


