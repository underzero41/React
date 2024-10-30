import React, { useState } from 'react';
import Content from './Content';

function TimeSwitcher() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      setTheme(prevThem => (prevThem === 'light' ? 'dark' : 'light'))
    }
    
    return ( 
        <>
            <button onClick={toggleTheme}>
                Switch theme on {theme === 'light' ? 'light' : 'dark'}
            </button>
            <Content theme={theme} />
        </>
     );
}

export default TimeSwitcher;