import './style.css'
import './constants'
import { userData } from './constants';

// Edit the User component code to output the userData data
export function User() {
  return (
    <div className="card">
      <h1>Task 2: Output dynamic content</h1>
      <h2>{userData.firstName}{userData.lastName}</h2>
      <p>{userData.title}</p>
    </div>
  );
}

// DON'T edit the App component code
function App2() {
  return (
    <div id="app">
      <User />
    </div>
  );
}

export default App2;
