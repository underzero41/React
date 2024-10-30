import React, { useRef,  useEffect } from 'react';
import Button from '@mui/material/Button';

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
            {/* <button onClick={handleClick}>Фокус</button> */}
            <Button variant="contained" onClick={handleClick}>Focus</Button>
            {/* <Button onClick={handleClick}>Focus</Button> */}
        </>
      );
}



export default RefExample;