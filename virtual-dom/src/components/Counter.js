import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    const incriment = () => {
      setCount(count + 1);
    };
    const dicriment = () => {
      setCount(count - 1);
    };

    return ( 
        <>
        <h2>Счетчик: {count}</h2>
        <button onClick={incriment}>Увеличить</button>
        <button onClick={dicriment}>Уменьшить</button>
        </>
     );
}

export default Counter;