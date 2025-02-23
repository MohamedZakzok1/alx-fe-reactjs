import { useState } from 'react';

function Counter() {
  // تعريف state للعداد
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Counter App</h2>
      <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Current Count: {count}</p>
      
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '5px', padding: '10px', fontSize: '1em' }}>
        Increment
      </button>

      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '5px', padding: '10px', fontSize: '1em' }}>
        Decrement
      </button>

      <button 
        onClick={() => setCount(0)} 
        style={{ margin: '5px', padding: '10px', fontSize: '1em' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
