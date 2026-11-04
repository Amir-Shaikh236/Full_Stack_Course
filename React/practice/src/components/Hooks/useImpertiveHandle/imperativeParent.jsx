
import { useRef } from 'react'
import { Imperative } from './imperativeChild'

export const ImperativeParent = () => {
    const childRef = useRef()

    return (
        <div>
            <Imperative ref={childRef} />
            <button onClick={() => childRef.current.refresh()}>Refresh</button>
        </div>
    )
}
