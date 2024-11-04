import React from 'react';
import { UserProvider } from './components/UserContext';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import UserNameForm from './components/UserNameForm';
import ThemeSelector from './components/ThemeSelector';

import { useState, useEffect } from 'react';
import withLoadingIndicator from './components/HOC';
import ExampleComponent from './components/ExampleComponent';

import { Provider } from 'react-redux';
import store from './components/Store';
import Counter from './components/Counter';



// const App = () => {
//     return (
//         <UserProvider>
//             <ThemeProvider>
//                 <Header />
//                 <UserNameForm />
//                 <ThemeSelector />
//                 <Profile />
//                 <Footer />
//             </ThemeProvider>
//         </UserProvider>
//     );
// };

// export default App;


// const ExampleComponentWithLoading = withLoadingIndicator(ExampleComponent);

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//       const fetchData = async () => {
//           // Симуляция загрузки данных
//           await new Promise((resolve) => setTimeout(resolve, 1000));
//           setData("Это данные, полученные из API.");
//           setIsLoading(false);
//       };

//       fetchData();
//   }, []);

//   return (
//       <div>
//           <ExampleComponentWithLoading isLoading={isLoading} data={data} />
//       </div>
//   );
// };

// export default App;

const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

export default App;
