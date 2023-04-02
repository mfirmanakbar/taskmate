import { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSub() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
   <div className='App'>
    <div className='box'>
      <p>{count}</p>
      
      <button onClick={handleAdd} className='add'>ADD</button>
      <button onClick={handleSub} className='sub'>SUB</button>
      <button onClick={handleReset} className='reset'>RESET</button>

      {/* or we also can use anonymous function */}
      {/* <button onClick={() => setCount(count + 1)} className='add'>ADD</button>
      <button onClick={() => setCount(count - 1)} className='sub'>SUB</button>
      <button onClick={() => setCount(0)} className='reset'>RESET</button> */}

    </div>
   </div>
  )
}
