import { useState } from "react";
import "./styles.css";
import Form from "./Form";
import View from "./View";

const App8 = () => {
    const [userInputs, setUserInputs] = useState()

    const handleSubmit = (userInputs) => {
        setUserInputs(userInputs);
    }

  return (
    <main>
      <h1>Forms and User Input</h1>
      <Form handleSubmit={handleSubmit}/>
      <View userDetails={userInputs}/>
    </main>
  );
};

export default App8;
