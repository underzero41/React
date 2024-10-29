import Counter from "./components/Counter";
import MessageList from "./components/list";
import RefExample from "./components/refExample";
import Timer from "./components/timer";
import Show from "./components/visible";

function App() {
  const username = "Ivan";
  return ( 
    <div>
      <h1>Hello {username}</h1>
      <Timer />
      <MessageList />
      <Counter />
      <RefExample />
      <Show data={'Text from component'}/>
      <Show data={'Another text from component'}/>
    </div>
   );
}

export default App;