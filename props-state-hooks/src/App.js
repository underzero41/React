import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import ToDoList from './components/ToDoList';
import Timer from './components/Timer';

function App() {
  
  return (
    <>
      <Counter />
      <TextInput />
      <ToDoList />
      <Timer />
    </>
  );
}

export default App;
