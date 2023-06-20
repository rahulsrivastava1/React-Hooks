import React, { useState } from 'react';

const StateHook = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <h2 className='title'>UseState Hooks</h2>
            <h3>Counter value is : {count}</h3>
            <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-primary" onClick={() => setCount(count - 1)} >Decrement</button>
        </div>
    )
}

export default StateHook;