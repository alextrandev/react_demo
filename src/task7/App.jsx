import { useState } from "react";
import ChildComponent from "./ChildComponent.jsx";
import "./styles.css";

const App7 = () => {
  const [message, setMessage] = useState("");

  const handleClick = (userInput) => {
    setMessage(userInput);
  };

  return (
    <main>
      <h1>Data Passing with User Input</h1>
      <ChildComponent handleClick={handleClick} />
      <p>{message}</p>
    </main>
  );
};

export default App7;
