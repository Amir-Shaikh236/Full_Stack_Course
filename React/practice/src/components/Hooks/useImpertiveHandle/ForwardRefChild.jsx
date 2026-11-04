// ForwardRef:
// ForwardRef is used to pass the ref to the child component from parent
// Always remember it takes 2 arguments and the second one must be ref. so cannot skip 1st argument.
// even though we just want ref we cannot place it in 1st argument that's why I used props as a 1st argument.

import { forwardRef } from "react"

export const ForwardRefChild = forwardRef((props, myRef) => {

    return (
        <div>
            <input style={{ padding: 5 }} ref={myRef} /> <br /> <br />
        </div>
    )
})

