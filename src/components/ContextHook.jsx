import React, { useContext } from 'react';
import { UserContext } from "../App";

function ContextHook() {
    const user = useContext(UserContext);

    return (
        <div>
            <h2 className='title'>UseContext Hooks</h2>
            <h3>Hi, My name is {user}.</h3>
        </div>
    )
}

export default ContextHook;