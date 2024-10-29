import React, { useRef,  useEffect } from 'react';

function RefExample() {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <>
            <input type='text' ref={inputRef}/>
            <button onClick={handleClick}>Фокус</button>
        </>
      );
}

export default RefExample;