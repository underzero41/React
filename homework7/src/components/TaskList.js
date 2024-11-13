import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './tasksSlice';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks.items);
    const taskStatus = useSelector((state) => state.tasks.status);

    useEffect(() => {
        if (taskStatus === 'idle') {
            dispatch(fetchTasks());
        }
    }, [taskStatus, dispatch]);

    return (
        <div>
            <h2>Список задач</h2>
            {taskStatus === 'loading' && <div>Загрузка...</div>}
            {taskStatus === 'succeeded' && (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.title} - {task.completed ? 'Выполнено' : 'Не выполнено'}
                        </li>
                    ))}
                </ul>
            )}
            {taskStatus === 'failed' && <div>Ошибка загрузки задач</div>}
        </div>
    );
};

export default TaskList;
