// useCallback()
// // useCallback will only create and store a NEW function reference if one of the values inside its dependency array changes!

// Every time a React component re-renders, any standard function defined inside its body is re-created from scratch.

// Why this causes unnecessary re-renders:
// // If you pass an inline function as a prop to a child component (especially one wrapped in React.memo),
// // the child sees a new function reference on every single render. It assumes the prop changed and re-renders needlessly!

// What useCallback does:
// // useCallback tells React:
// // "Cache (memoize) this function instance in memory. Give me the exact same function reference on every re-render, unless its dependencies change."

import { useCallback, useState } from "react"

export default function UseCallback({ userId }) {

    const [text, setText] = useState('');

    const handleClick = useCallback(() => {
        console.log('Fetching Data for User ID: ', userId);

    }, [userId]);

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="counter">
            <input type="text" value={text} onChange={handleChange} />
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

// Explaination:
// What happens when you type in the <input> field?
// // setText updates the state, causing UserProfile to re-render.
// // handleInputChange is created as a brand-new function reference.
// // fetchUserData checks its dependency array ([userId]). Since userId did NOT change, React reuses the same fetchUserData reference from the previous render!


// Advantages:
// 1. Prevents Unnecessary Child Re-renders:
// // When passing callbacks to child components optimized with React.memo, useCallback ensures the child doesn't re-render needlessly.

// 2. Stable Dependencies for useEffect:
// // If a function is called inside useEffect, wrapping that function in useCallback prevents useEffect from running in an infinite loop!

// Safe: fetchUserData reference is stable, so useEffect won't loop infinitely!
// useEffect(() => {
// handleClick();
// }, [handleClick]);

// DisAdvantages:
// 1. Adds Extra Overhead for Simple Components:
// // useCallback has a cost! React has to store the dependency array and compare values on every render.
// If you use it on a simple <button onClick={() => console.log('hi')}>, useCallback makes your app slightly slower and more memory-heavy.

// 2. Does NOT stop the parent component from re-rendering:
// // useCallback only caches the function reference; it does not stop the parent component itself from re-rendering when state changes!
