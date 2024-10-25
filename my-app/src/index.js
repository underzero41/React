import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Greeting from './Greeting';
import reportWebVitals from './reportWebVitals';
import CurrentTime from './CurrentTime';
import EventCard from './EventCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Greeting />
    <CurrentTime />
    <div>
    <EventCard title = 'Крутая Группа' date='22.05.2021, 19.00' location = 'Moscow'/>
    <EventCard title = 'Крутая Группа2' date='22.05.2021, 15.00' location = 'Sochi'/>
    <EventCard title = 'Крутая Групп3' date='22.05.2021, 12.00' location = 'Ekb'/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
