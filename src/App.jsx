import {Counter} from "./components/Counter/Counter";
import { useState } from "react";


function App() {
const [toggle, setToggle] = useState(false);

  return (
    <div className="grid gap-5">
      {toggle ? <Counter /> : ""}
      <button
        className="p-5 bg-violet-500 text-white rounded-full font-bold hover:bg-violet-600 transition-all duration-300 ease-in-out"
        onClick={() => setToggle((prev)=>!toggle)}
        >

        Toggle
      </button>
    </div>
  );
}

export default App;
