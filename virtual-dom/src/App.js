import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import MessagesList from './components/MessegesList';
import TimeSwitcher from './components/TimeSwitcher';
import TextDisplayForm from './components/TextDisplayForm';

function App() {
  const messages = [
    { id: 1, text: 'Привет, мир!' },
    { id: 2, text: 'Как дела?' },
    { id: 3, text: 'Сегодня хорошая погода.' },
];
  return (
    <>
    {/* <Greeting name="Nicolay Coster Valdau" />
    <Greeting name="Sergei" />
    <Greeting name="Silach" />
    <Greeting name="Daineres Burya" />
    <Counter />
    <MessagesList messages={messages} />
    <TimeSwitcher /> */}
    <TextDisplayForm />
    </>
  )
}

export default App;
