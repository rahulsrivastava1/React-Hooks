import React from 'react';
import useCounter from "./customHooks/Hooks/useCounter";

function CounterHook() {
    const [count, increment, decrement, reset] = useCounter(0, 1);

    return (
        <div>
            <h2 className='title'>Custom Hooks</h2>
            <h2>Count = {count}</h2>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button className="btn btn-primary" onClick={decrement}>Decrement</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterHook;