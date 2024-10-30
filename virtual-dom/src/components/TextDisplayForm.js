import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const TextDisplayForm = () => {
    // Используем состояние для хранения введенного текста
    const [inputText, setInputText] = useState('');
    const [displayText, setDisplayText] = useState('');

    // Обработчик для изменения состояния при вводе текста
    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    // Обработчик для отображения введенного текста
    const handleButtonClick = () => {
        setDisplayText(inputText);
    };

    return (
        <div>
            <TextField
                label="Введите текст"
                variant="outlined"
                fullWidth
                value={inputText}
                onChange={handleInputChange}
                margin="normal"
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleButtonClick}
            >
                Отобразить текст
            </Button>

            {displayText && (
                <Card style={{ marginTop: '20px' }}>
                    <CardContent>
                        <Typography variant="h5">
                            {displayText}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default TextDisplayForm;