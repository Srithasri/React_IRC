import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    const Increment=()=>{
        setCount((count) => count + 1)
    }
    const Decrement=()=>{
        setCount((count) => count - 1)
    }
    return (
        <div>
            <button onClick={Increment}>+</button>
            <p>Count: {count}</p>

            <button onClick={Decrement}>-</button>
        </div>
    )
}

export default Counter;