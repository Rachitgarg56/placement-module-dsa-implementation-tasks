import { useState } from "react";

const CounterShow = ( { updateCount } ) => {

    const [count,setCount] = useState(0);

    return (
        <div>
            <p style={{fontSize:'large'}}><span style={{fontWeight:'bold'}}>Count:</span> {count}</p>
        </div>
    )
}

export default CounterShow;