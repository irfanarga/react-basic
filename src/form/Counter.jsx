import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    console.log(counter);
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Increment +3</button>
      </div>

      <h1>Counter : {counter}</h1>
    </div>
  );
}
