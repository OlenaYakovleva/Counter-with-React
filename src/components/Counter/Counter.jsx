import {useState} from 'react';
import {useEffect} from 'react';

function initialCount() {
  console.log("initialCount");
  return Math.floor(Math.random() * 10);
}



export function Counter() {
    // Counter component using useState hook
    console.log("render Counter component");
    
    const [count, setCount] = useState(() => initialCount());

    const [history, setHistory] = useState([]);


    const increment = () => {
      setCount(count + 1);
      setHistory([...history, count]);
    };
  

    const incrementPlus3 = () => {
      setCount(count + 3);
      setHistory([...history, count]);
    };



    const decrement = () => {
      setCount(count - 1);
      setHistory([...history, count]);
    };

    const reset = () => {
    setCount(0);
    setHistory([...history, count]);
  };

const [second, setSecond] = useState(0);

const minutesString = String(Math.floor(second / 60)).padStart(2, 0);
const secondsString = String(Math.floor(second % 60)).padStart(2, 0);



    useEffect (() => {
    
    
  const timer = setInterval(() => {
    setSecond((prevSec) => prevSec + 1);

  }, 1000);

  return () => {
   clearInterval(timer);
  };
  }, []);


  const [users, setUsers] = useState([]);
  useEffect (() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      setUsers(data);
    });
  }, []);

    return (
      <div>

        <p className="text-4xl text-blue-600 font-bold text-center py-4">#{count}. Time {minutesString}:{secondsString}</p>

        <div className="grid gap-3">
        <button className="text-lg px-8 py-5 rounded border border-gray-400 bg-pink-500 w-50 hover:bg-gray-300" onClick={increment}>
          Increment
        </button>
        <button className="text-lg px-8 py-5 rounded border border-gray-400 bg-green-500 w-50 hover:bg-gray-300" onClick={incrementPlus3}>
          Increment +3
        </button>
        <button className="text-lg px-8 py-5 rounded border border-gray-400 bg-blue-400 w-50 hover:bg-gray-300" onClick={decrement}>
          Decrement
        </button>
        <button className="text-lg px-8 py-5 rounded border border-gray-400 bg-red-500 w-50 hover:bg-gray-300" onClick={reset}>
          Reset
        </button>
        </div>
        <ul>
          {users.slice(0, 5).map((user) => <li>{user.id} - {user.name}</li>)}
        </ul>
      </div>
    );
  }
  
  

