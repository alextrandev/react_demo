import { useRef } from "react";

const LoginPrompt = ({ handleLogIn }) => {
  // TODO: Use useRef hook to create a reference to the input element
  const inputRef = useRef(null);

  return (
    <>
      <p>Please log in to see your profile.</p>
      <div>
        <label htmlFor="name">Your first name</label>
        <input type="text" id="name" ref={inputRef} required/>
      </div>
      <button onClick={() => handleLogIn(inputRef.current.value)}>
        Log in
      </button>
    </>
  );
};

export default LoginPrompt;
