import { useState } from "react";

function Show({data}) {
    const [block, setBlock] = useState(true);
    const blockShow = () => {
      setBlock(!block);
    }
    

    
    return ( 
        <div>
            <button onClick={blockShow}>
                Show or Hide
            </button>
            <p style={{display: block ? 'block' : 'none'}}>
                {data}
            </p>
        </div>
     );
}

export default Show;