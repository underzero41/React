import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './components/store';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const isDarkTheme = useSelector((state) => state.isDarkTheme); // Получаем текущую тему из состояния

  return (
      <div
          style={{
              backgroundColor: isDarkTheme ? '#333' : '#fff',
              color: isDarkTheme ? '#fff' : '#000',
              minHeight: '100vh',
              transition: 'background-color 0.5s ease, color 0.5s ease' // Плавный переход
          }}
      >
          <ThemeToggle />
      </div>
  );
};

// Оберните App в Provider
const WrappedApp = () => {
  return (
      <Provider store={store}>
          <App />
      </Provider>
  );
};

export default WrappedApp;

