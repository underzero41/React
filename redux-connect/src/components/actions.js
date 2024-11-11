// Действие для добавления задачи
export const addTask = (description) => {
    return {
      type: 'ADD_TASK',
      payload: {
        id: Date.now(), // Генерация уникального идентификатора
        description,
        isCompleted: false // Изначально задача не выполнена
      }
    };
  };
  
  // Действие для удаления задачи
  export const removeTask = (id) => {
    return {
      type: 'REMOVE_TASK',
      payload: id
    };
  };
  