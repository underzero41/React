// import { createStore } from 'redux';

// // Начальное состояние
// const initialState = {
//   tasks: []
// };

// // Редюсер
// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TASK':
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload]
//       };
//     case 'REMOVE_TASK':
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload)
//       };
//     default:
//       return state;
//   }
// };

// // Создание store
// const store = createStore(taskReducer);

// export default store;


// second task
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer
  }
});

export default store;
