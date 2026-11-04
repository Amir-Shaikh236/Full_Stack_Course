import { useRef, useState } from "react"

export default function Timer() {
    const [time, setTime] = useState(0)
    const [timerState, setTimerState] = useState(false)

    const timerRef = useRef()

    const startTimer = () => {
        setTimerState(true)
        timerRef.current = setInterval(() => {
            setTime(time => time + 1)
        }, 1000)
    }

    const stopTimer = () => {
        setTimerState(false)
        clearInterval(timerRef.current)
    }

    const resetTimer = () => {
        stopTimer()
        setTime(0)
        timerRef.current = null
    }

    return (
        <div>
            <h1> Timer: {time}</h1>
            {timerState ?
                <><button className="counter" onClick={stopTimer}> Stop Timer</button><br /></>
                :
                <><button className="counter" onClick={startTimer}>Start Timer</button><br /></>
            }
            <button className="counter" onClick={resetTimer}>Reset Timer</button><br />
        </div>
    )
}

