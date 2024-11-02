import Box from "./components/Box";
import List from "./components/List";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';



function App() {
  // return (
  //   // <>
  //   // <Box>
  //   //     <h1>Заголовок</h1>
  //   //     <p>Это пример текста внутри компонента Box.</p>
  //   // </Box>
  //   // <Box>
  //   //   <img src="https://via.placeholder.com/150" alt="Пример" />
  //   // </Box>
  //   // <Box>
  //   //   <button onClick={() => alert('Кнопка нажата!')}>Нажми меня</button>
  //   // </Box>
  //   // </>    

    
  // );
  
  
  // const items = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4'];

  //   const renderItem = (item, index) => {
  //       const styles = {
  //           color: index % 2 === 0 ? 'blue' : 'green',
  //           fontWeight: index % 2 === 0 ? 'bold' : 'normal',
  //       };

  //       return <span style={styles}>{item}</span>;
  //   };

  //   return (
  //       <div>
  //           <h2>Список пунктов</h2>
  //           <List items={items} renderItem={renderItem} />
  //       </div>
  //   );


  return (
    <Router>
        <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/article/:id" element={<DetailPage />} />
        </Routes>
    </Router>
);


}

export default App;
