import React, { useState } from 'react';
import { TextField, Button, Card, Typography, IconButton, Box, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    const handleAddTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, { id: Date.now(), text: taskInput }]);
            setTaskInput('');
        }
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
            <TextField
                label="Новая задача"
                variant="outlined"
                fullWidth
                value={taskInput}
                onChange={handleInputChange}
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleAddTask} 
                sx={{ marginTop: 2 }}
            >
                Добавить задачу
            </Button>

            <List sx={{ marginTop: 2 }}>
                {tasks.map(task => (
                    <Card key={task.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 1, padding: 1 }}>
                        <Typography>{task.text}</Typography>
                        <IconButton onClick={() => handleDeleteTask(task.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Card>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;
