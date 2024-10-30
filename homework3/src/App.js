import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
    <h1>Конвертер температур</h1>
    <TemperatureConverter />
    <h1>Список задач</h1>
    <TodoList />
    </div>

  );
}

export default App;
