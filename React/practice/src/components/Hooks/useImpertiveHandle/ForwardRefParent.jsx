import { useRef } from "react"
import ForwardRefChild from "./ForwardRefChild";


function ForwardRefParent() {
    const myRef = useRef(null)

    const handleClick = () => {
        myRef.current.focus();
    }

    return (
        <div>
            <h1>Parent Component</h1>
            <div>
                <ForwardRefChild ref={myRef} />
                <button className="counter" onClick={handleClick}>Focus Input</button>
            </div>
        </div>
    )
}

export default ForwardRefParent