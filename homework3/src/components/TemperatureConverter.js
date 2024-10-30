import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    // Конвертация Цельсия в Фаренгейт
    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        const f = (value * 9/5) + 32;
        setFahrenheit(value ? f.toFixed(2) : '');
    };

    // Конвертация Фаренгейта в Цельсий
    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        const c = (value - 32) * 5/9;
        setCelsius(value ? c.toFixed(2) : '');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}>
            <TextField
                label="Температура (°C)"
                variant="outlined"
                value={celsius}
                onChange={handleCelsiusChange}
            />
            <TextField
                label="Температура (°F)"
                variant="outlined"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
            />
        </Box>
    );
};

export default TemperatureConverter;
