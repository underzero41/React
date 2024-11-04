import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './actions';

const ThemeToggle = () => {
    const isDarkTheme = useSelector((state) => state.isDarkTheme);
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Текущая тема: {isDarkTheme ? 'Темная' : 'Светлая'}</h1>
            <button onClick={handleToggle}>
                Переключить на {isDarkTheme ? 'светлую' : 'темную'} тему
            </button>
        </div>
    );
};

export default ThemeToggle;
