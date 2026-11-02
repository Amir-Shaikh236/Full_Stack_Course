// useEffect (Asynchronous / Non-blocking): 
// // Runs after React has calculated the changes AND the browser has painted the pixels onto the user's screen.

// useLayoutEffect (Synchronous / Blocking): 
// // Runs after React calculates DOM changes, but before the browser paints those changes onto the screen.

import { useState, useLayoutEffect, useEffect } from "react"

export default function UseLayoutEffect() {
    const [num, setNum] = useState(0)

    useLayoutEffect(() => {
        if (num === 0) setNum(5 + Math.random() * 50);

    }, [num]);

    useEffect(() => {
        if (num === 0) setNum(5 + Math.random() * 50);

    }, [num]);

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => setNum(0)}>Generate</button>
        </div>
    )
}

// Advantages:
// 1. Eliminates Visual Flickering:
// // Because it executes before the browser paints, users will never see layout jumps, incorrect initial positions, or pop-ins.

// Disadvantages:
// 1. Blocks Screen Painting (Performance Hit):
// // It blocks the main thread. Heavy math or slow operations inside useLayoutEffect() make your application feel unresponsive or frozen.

// 2. React 19 / ESLint Warnings on setState:
// // Calling setState synchronously inside useLayoutEffect() causes cascading re-renders (as you can in your VS Code error!),
// // because React has to render, run your layout effect, set new state, and render a second time before painting.

// 3. Server-Side Rendering (SSR) Warnings:
// // If you use Next.js or server rendering, useLayoutEffect() doesn't run on the server (since there is no DOM/browser paint on a server).
// // React will output console warnings during SSR unless handled carefully.



