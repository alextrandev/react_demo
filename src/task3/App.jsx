import BookInfo from "./BookInfo";
import "./style.css"

function App3() {
  return (
    <main>
    <h1>Task 3: Props</h1>
    <div className="books">
      <BookInfo title="Dune" author="Frank Herbert"/>
      <BookInfo title="The Three-Body Problem" author="Liu Cixin"/>
      <BookInfo title="Origin" author="Dan Brown"/>
    </div>
    </main>
  );
}

export default App3;
