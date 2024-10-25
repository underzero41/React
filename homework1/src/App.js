import logo from './logo.svg';
import './App.css';
import './Message';
import Message from './Message';

function App() {
  return (
    <div className="App">
        <h1>Привет из React!</h1>
        <Message text="Это сообщение передано через props!" />
        <Message text="Вы можете передать любое текстовое сообщение." />
    </div>
  );
}

export default App;
