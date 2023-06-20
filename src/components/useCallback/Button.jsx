import React from 'react';

function Button({ handleClick, children }) {
    console.log('Rendering button - ', children)
    return (
        <button className="btn btn-primary" onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Button);