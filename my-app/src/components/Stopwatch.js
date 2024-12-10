import { useState, useEffect } from "react";
import { DateTime, Duration } from "luxon";

function Stopwatch() {
    const [startTime, setStartTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(Duration.fromObject({}));
    const [isRunning, setIsRunning] = useState(false);

    const toggleStart = () => {
        if (isRunning) {
            setIsRunning(false);
            const now = DateTime.now();
            setElapsedTime(elapsedTime.plus(now.diff(startTime)));
        }
        if (!isRunning) {
            setStartTime(DateTime.now());
            setIsRunning(true);
        }
    };

    const reset = () => {
        setIsRunning(false);
        setElapsedTime(Duration.fromObject({}));
        setStartTime(null);
    };

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                const now = DateTime.now();
                setElapsedTime(elapsedTime.plus(now.diff(startTime)));
                setStartTime(now);
            }, 1000);

            return () => clearInterval(interval)
        }
    }, [isRunning, startTime, elapsedTime]);

    return (
        <div>
            <h1>{elapsedTime.toFormat("hh:mm:ss")}</h1>
            <button onClick={toggleStart}>
                {isRunning ? "Pause" : "Start"}
            </button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Stopwatch;