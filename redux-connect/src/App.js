import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from './components/actions';

import { Provider } from 'react-redux';
import store from './components/store';
import ProductList from './components/ProductList';
import FavoriteList from './components/FavoriteList';



// const App = () => {
//   const [taskDescription, setTaskDescription] = useState('');
//   const dispatch = useDispatch();
//   const tasks = useSelector(state => state.tasks);

//   const handleAddTask = () => {
//     if (taskDescription.trim()) {
//       dispatch(addTask(taskDescription));
//       setTaskDescription('');
//     }
//   };

//   const handleRemoveTask = (id) => {
//     dispatch(removeTask(id));
//   };

//   return (
//     <div>
//       <h1>Список дел</h1>
//       <input 
//         type="text" 
//         value={taskDescription} 
//         onChange={(e) => setTaskDescription(e.target.value)} 
//         placeholder="Введите описание задачи"
//       />
//       <button onClick={handleAddTask}>Добавить задачу</button>
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id}>
//             <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
//               {task.description} (ID: {task.id})
//             </span>
//             <button onClick={() => handleRemoveTask(task.id)}>Удалить</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Магазин</h1>
        <ProductList />
        <FavoriteList />
      </div>
    </Provider>
  );
};

export default App;
