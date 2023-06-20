import React, { useEffect, useRef, useState } from 'react';
import FocusInput from './FocusInput';

function RefHook() {
    const [timer, setTimer] = useState(0);
    const interValRef = useRef();

    useEffect(() => {
        interValRef.current = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000)
        return () => {
            clearInterval(interValRef.current)
        }
    }, []);

    return (
        <div>
            <h2 className='title'>UseRef Hooks</h2>
            <h4>Timer - {timer}</h4>
            <button className="btn btn-primary" onClick={() => clearInterval(interValRef.current)}>Stop Timer</button>
            <FocusInput />
        </div>
    )
}

export default RefHook;