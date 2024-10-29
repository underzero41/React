import React, { useState } from 'react';

function ToDoList() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
    
    const handleAddTodo = () => {
      if (inputValue.trim()) {
        setTodos([...todos, inputValue])
        setInputValue('')
      }
    };
    
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleAddTodo();
      }
    };

    return ( 
        <>
            <input type='text' value={inputValue} onChange={handleChange} onKeyPress={handleKeyPress} placeholder='Input new task'/>
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
     );
}

export default ToDoList;