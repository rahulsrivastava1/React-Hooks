import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "incrementBy5":
            return state + action.payload;
        case "decrementBy5":
            return state - action.payload;
        case "reset":
            return initialState;
        default:
            return state;
    }
}

function ReducerHook() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2 className='title'>UseReducer Hooks</h2>
            <h5>count value is : {count}</h5>
            <button className="btn btn-primary" onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button className="btn btn-primary" onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button className="btn btn-primary" onClick={() => dispatch({ type: "incrementBy5", payload: 5 })}>Increment By 5</button>
            <button className="btn btn-primary" onClick={() => dispatch({ type: "decrementBy5", payload: 5 })}>Decrement By 5</button>
            <button className="btn btn-danger" onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}

export default ReducerHook;