import React, { useState, useEffect } from 'react';


const TextInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Введите текст..."
            />
            <p>Вы ввели: {inputValue}</p>
        </div>
    );
};


export default TextInput;