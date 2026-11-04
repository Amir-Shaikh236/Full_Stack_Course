// Imperative Vs Declarative

import { forwardRef, useImperativeHandle, useRef, useState } from "react"

// 1. Declarative (React Way):
// //  You change the state or props and react automatically updates the UI to match.
// //  You don't tell react how to draw the UI - You just describe what it should look like based on state.

// 2. Imperative (The traditional JS Way):
// // It's hook that allows us to expose functions or values from a child component to a parent component.
// // You directly trigger a method on a component from the outside. (e.g: ref.current.focus(), modelRef.current.open()).

// Why Imperative exists:
// Normally, Passing a ref to a child component gives the parent access to the entire raw DOM node. But what if you want to restrict
// what parent can do?
// useImperativeHandle lets a child component customize and expose a limited, specific set of functions to its parent,
// hiding everything else inside the child component.


export const Imperative = forwardRef((props, ref) => {

    const divRef = useRef();

    const [status, setStatus] = useState("Off")

    const computedStatus = `${status}line`

    useImperativeHandle(ref, () => ({
        refresh: () => {
            divRef.current.innerText = computedStatus;
        },
    }), [computedStatus])

    return (
        <div id="center">
            <div ref={divRef} >Offline</div>
            <button className="counter" onClick={() => setStatus("Off")}> Offline</button>
            <button className="counter" onClick={() => setStatus("On")}> Online</button>
        </div >
    )
});
