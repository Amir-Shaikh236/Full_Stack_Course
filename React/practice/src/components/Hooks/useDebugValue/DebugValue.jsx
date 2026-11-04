// useDebugValue:
// It is a specilialized react hook that allows custom hooks to output custom, human-readable labels directly 
// inside the react DevTools browser extension panel.
// It only works inside custom hooks (e.g: useAuth, useOnlineStatus, useFetch).
// Calling it directly inside standard component will not show anything useful.


export default function DebugValue() {
    return (
        <div>
            <h1>Debug Value</h1>
        </div>
    )
}

