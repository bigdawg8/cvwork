import React, { useState, useEffect, useRef } from 'react';

function Stoperica1() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTime = useRef(0);
    const intervalIdRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            startTime.current = Date.now() - elapsedTime;
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime.current);
            }, 10);
        } else {
            clearInterval(intervalIdRef.current);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };

    const formatTime = () => {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return (
        <div className='container'>
            <div className='stopwatch'>
                {formatTime()}
            </div>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            <button onClick={start}>Start</button>
        </div>
    );
}

export default Stoperica1;
