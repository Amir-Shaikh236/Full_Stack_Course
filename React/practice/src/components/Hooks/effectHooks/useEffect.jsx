// useEffect:
// Effect hooks allow functional components to manage side effects in a structured and efficient manner.
// useEffect hanldes common side effects like data fetching and subscription.
// It runs after the component renders to the screen. 
// This ensures that fetching data or running timers never blocks the browser from drawing the UI first!
// React components are designed to take props/state and return UI JSX. 
// But real-world applications need to interact with the outside world—like fetching data from a backend server, 
// setting up timers (setInterval), or manually changing the document title. These actions outside React's UI loop are called Side Effects.

import { useEffect, useState } from "react"

export default function Effect() {
    const [count, setCount] = useState(0)
    const [countset, setCountset] = useState(0)

    useEffect(() => {
        alert('This will call on everytime countset changes')

    }, [countset])

    useEffect(() => {
        alert('This will call only once when application starts')

    }, []);

    useEffect(() => {
        alert('This will call on every render')
    });

    return (
        <>
            <section id="center">
                <div>
                    <h1>Get started</h1>
                </div>
                <button type="button" className="counter" onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </button>
                <button type="button" className="counter" onClick={() => setCountset((count) => count + 1)}>
                    Count is {countset}
                </button>
            </section>
        </>
    )
}

// Advantages:
// 1. Runs Only Once (Performance Optimization):
// Prevents expensive network requests or API calls from firing on every single component re-render.

// 2. Cleanup Support:
// You can return a cleanup function from useEffect that runs when the component is unmounted (removed from the screen)—
// perfect for clearing timers or removing event listeners!
// example:
// useEffect(() => {
//   const timer = setInterval(() => console.log("Tick"), 1000);

//   // Cleanup function runs when component unmounts!
//   return () => clearInterval(timer);
// }, []); // Empty array = setup once, cleanup on destroy


// Disadvantages:
// 1. Stale Closure Bugs:
// If you use state or props inside useEffect without listing them in the dependency array,
// the effect gets "locked" into reading the initial render's value forever.
