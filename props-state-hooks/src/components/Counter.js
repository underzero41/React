import React, { useState, useEffect } from 'react';


function Counter() {
    
    const [count, setCount] = useState(0);
    return ( 
        <>
            <button onClick = {() => setCount(count + 1)}>
                click
            </button>
            <p>{count}</p>
        </>
     );
}

export default Counter;