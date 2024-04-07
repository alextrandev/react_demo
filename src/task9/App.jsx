import { useState } from "react";
import LoginPrompt from "./LoginPrompt";
import UserProfile from "./UserProfile";
import "./styles.css";

const App9 = () => {
  const [user, setUser] = useState({
    name: "",
    isLoggedIn: false,
  });

  const handleLogIn = (name) => {
    if (name == "") name = 'Anonymous';
    setUser({ ...user, name: name, isLoggedIn: true });
  };

  const handleLogOut = () => {
    setUser({ ...user, isLoggedIn: false });
  };

  return (
    <main>
      <h1>Conditional rendering</h1>

      <div>
        {/* TODO: Add conditional rendering to display UserProfile component if user.isLoggedIn
  is true, otherwise display the LoginPrompt component */}
        { user.isLoggedIn 
          ? <UserProfile user={user.name} handleLogOut={handleLogOut}/>
          : <LoginPrompt handleLogIn={handleLogIn}/>
        }
      </div>
    </main>
  );
};

export default App9;
