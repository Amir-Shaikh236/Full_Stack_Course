// useInsertionEffect()
// // useInsertionEffect runs before DOM layout calculations, enabling dynamic CSS injection without forcing expensive browser layout recalculations.

import { useEffect, useInsertionEffect, useLayoutEffect } from "react"

export default function UseInsertionEffect() {

    useEffect(() => {
        console.log('UseEffect Order.')
    }, [])

    useLayoutEffect(() => {
        console.log('useLayoutEffect Order.')
    }, [])

    useInsertionEffect(() => {
        console.log('useInsertionEffect Order')
    }, [])

    return (
        <div>useInsertionEffect</div>
    )
}