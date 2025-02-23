import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div style={{textAlign: 'center', fontSize: '20px'}}>
        <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{backgroundColor: 'lightblue', margin: '5px'}}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{backgroundColor: 'lightblue', margin: '5px'}}>Decrement</button>
      <button onClick={() => setCount(0)} style={{backgroundColor: '#ff7582', margin: '5px'}}>Reset</button>
    </div>
  );
}

export default Counter
