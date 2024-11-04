import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSelector = () => {
    const { changeTheme } = useContext(ThemeContext);

    return (
        <div>
            <h3>Выберите тему:</h3>
            <button onClick={() => changeTheme("светлая")}>Светлая тема</button>
            <button onClick={() => changeTheme("темная")}>Темная тема</button>
        </div>
    );
};

export default ThemeSelector;
