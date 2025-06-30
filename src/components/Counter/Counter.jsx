import {useState} from 'react';



export function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);



    return (
      <div>

        <p className="text-4xl text-blue-600 font-bold text-center py-4">{count}</p>

        <div className="grid gap-3">
        <button className="text-lg px-8 py-5 rounded border border-gray-400 bg-pink-500 w-50 hover:bg-gray-300" onClick={increment}>
          Increment
        </button>
        <button className="text-lg px-8 py-5 rounded border border-gray-400 bg-blue-400 w-50 hover:bg-gray-300" onClick={decrement}>
          Decrement
        </button>
        <button className="text-lg px-8 py-5 rounded border border-gray-400 bg-red-500 w-50 hover:bg-gray-300" onClick={reset}>
          Reset
        </button>
        </div>
      </div>
    );
  }
  
  

