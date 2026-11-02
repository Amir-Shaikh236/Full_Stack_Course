// WHy useReducer exists: useState is great for simple state(like a single counter or a toggle switch)
// But when your state gets complex with multiple sub-values, objects or state changes that depend on each other
// having many useState calls can make your code messy and hard to debug.


// useReducer: moves all the rules for how your state changes out of your event handlers and into one central function called reducer function.
// Redux Pattern: it uses the same pattern as Redux, 
// you send an action(a descrption of what happened) and the reducer calculates and the returns new state
// Why it's built this way: It separates "what happened" (actions) from "how the state changes" (reducer), 
// making state logic easier to read and test.

import { useState, useReducer } from "react"

const initialState = { name: "", email: "", age: 18 };

function formReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.value
            };

        case 'RESET_FORM':
            return initialState;

        default:
            return state;

    }
}

export default function UseReducer() {
    const [isEditing, setIsEditing] = useState(false);
    const [formState, dispatch] = useReducer(formReducer, initialState);

    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name,
            value: e.target.value
        });
    };

    return (
        <div>
            <h3>User Profile</h3>
            <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Close Editing' : 'Edit Profile'}</button>

            {isEditing && (
                <div>
                    <div>
                        <label htmlFor="">Name: </label>
                        <input type="text" name="name" value={formState.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="">Email: </label>
                        <input type="email" name="email" value={formState.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="">Age: </label>
                        <input type="number" name="age" value={formState.age} onChange={handleChange} />
                    </div>

                    <div>
                        <button onClick={() => dispatch({ type: 'RESET_FORM' })}>Reset Form</button>
                    </div>
                </div>
            )}
        </div>
    )
}


// Advantages:
// 1. Centralized State Logic (Single Source of Truth):
// All rules for how state can change live in one single place(the reducer function) outside your component.
// This makes your component cleaner and easier to read.

// 2. Easier Testing:
// Because the reducer function is a pure JavaScript function (it doesn't depend on React or UI rendering),
// you can unit test it easily with Jest or Vitest without needing to mount any UI components!


// Disadvantages:
// 1. More Boilerplate Code:
// For simple state (like a simple boolean toggle or a single input field), useReducer requires writing actions, switch statements, and dispatchers.
// It feels heavy and wordy compared to a single useState line.

// 2. Steeper Learning Curve:
// It requires understanding action objects, dispatching, state immutability, and reducer patterns before you can write simple component state.

// 3. Overkill for Simple Components:
// Using useReducer to toggle a modal open and closed is like hiring a full-time accountant just to count $5 in your wallet!


