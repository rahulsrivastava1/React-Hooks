import React, { useState } from 'react';

function useCounter(initialCount = 0, value) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const reset = () => {
        setCount(initialCount);
    }

    return [count, increment, decrement, reset];
}

export default useCounter;