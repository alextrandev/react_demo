import { useState } from "react";

const Counter = () => {
  // TODO: Declare a state variable 'count' with an initial value of 0 using the 'useState' hook
    const [counter, setCounter] = useState(0)
  // TODO: Define a function 'increment' that updates the 'count' state by incrementing it
    const increment = () => setCounter(counter + 1)
  // TODO: Define a function 'decrement' that updates the 'count' state by decrementing it
    const decrement = () => setCounter(counter - 1)
  // Extra: reset button
    const reset = () => setCounter(0)

  return (
    <div>
      <h2>Counter: {counter}</h2>
      {/* TODO: Render buttons to increment and decrement the count */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
