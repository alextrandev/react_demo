import './styles.css';
import BookCard from './BookCard';

const App4 = () => {
  return (
    <main>
    <h1>Task 4: Component Composition</h1>
    <div className="books">
      {/*  To test the solution, import the BookCard component and uncomment the code. */}
      <BookCard title="The Art of Programming">
        An insightful journey through the world of programming, exploring both
        theory and practical applications.
        <button>Read More</button>
      </BookCard>
      <BookCard title="The Art of Programming">
        An insightful journey through the world of programming.
        <button>Purchase</button>
      </BookCard>
    </div>
    </main>
  );
};

export default App4;
