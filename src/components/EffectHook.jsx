import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EffectHook() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h2 className='title'>UseEffect Hooks</h2>
            {
                users.length === 0 ? (<p>Loading...</p>) : (
                    users.map((user, index) => (
                        <h3 key={index}>{user.name}</h3>
                    ))
                )
            }
        </div>
    )
}

export default EffectHook;