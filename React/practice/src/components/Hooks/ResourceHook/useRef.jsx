// useRef:
// useRef returns a plain javaScript Object with a single property: .current.
// we cannot use the value of useRef inside jsx.
// Whatever value you put inside ref.current stays saved across component re-renders.
// useRef vs useState:
// useState: Hey! Data changed, Redraw(re-render) the screen right now.
// useRef: Hey! Store this data in memory silently. DO NOT re-render the screen.

// Use Cases:
// 1. Silent Box/Secret NoteBook:
// // Storing values that persist across renders without triggering a visual re-render.(e.g timer IDs, previous State, click, counters for analytics)

// 2. Direct DOM Access:
// // Getting a direct reference to a physical HTML element in the browser DOM (e.g., focusing an <input/>, measuring an element's size or scrolling to a section)

import { useRef, useState } from "react"

export default function UseRef() {
    const [countState, setCountState] = useState(0)
    const countRef = useRef(0)
    const btnRef = useRef()

    const handleRef = () => {
        countRef.current = countRef.current + 1
        console.log(`Ref Value: ${countRef.current}`)
        btnRef.current.style.backgroundColor = "red";
    }

    const handleState = () => {
        setCountState(countState + 1)
        console.log(`Ref Value: ${countRef.current}`)
    }

    return (
        <section id="center">
            <div>
                <h1>State Count State: {countState}</h1>
            </div>
            <div>
                <button className="counter" onClick={handleState}>Increment State </button><br />
                <button ref={btnRef} className="counter" onClick={handleRef}>Increment Ref</button>
            </div>
        </section>
    )
}

// Advantages:
// 1. Persist value without rendering
// 2. Direct DOM Access.

// DisAdvantages:
// 1. Does Not Trigger Re-render (Silent UI Bugs)
// // if you try to display {ref.current} on screen expecting the UI to update when ref.current changes,
// // the UI will stay stuck on the old value.

// 2. Cannot Read/Write ref.current During Render (React 19/ Compile Error):
// // Reading or mutating ref.current directly inside the body of your component JSX triggers ESLint Warning ("Cannot access refs during render").

// 3. Manual LifeCycle Management:
// // Unlike useState, React doesn't track changes inside useRef.
// // if you store an object or timer in ref.current, you must manually clean it up.
// // e.g: clearTimeout(ref.current) to avoid memory leaks.

