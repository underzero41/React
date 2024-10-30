import  { useState } from 'react';
import Button from '@mui/material/Button';


function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 2);
  }
  

    return ( 
        <div>
            <span>{count}</span>
            {/* <button onClick={()=> {setCount(prevstate => ++prevstate)}}>click +1</button> */}
            {/* <button onClick={updateCount}>click +2</button> */}
            <Button onClick={updateCount}>click +2</Button>
            
        </div>
     );
}

export default Counter;