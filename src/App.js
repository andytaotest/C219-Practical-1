import "./App.css";

// LibraryStatus Component (Displays whether the library is open or closed)
function LibraryStatus({ isOpen }) {
  return (
    <div>
      {isOpen ? (
        <>
          <p>The library is open</p>
          <button>Visit Library</button>
        </>
      ) : (
        <p>The library is closed</p>
      )}
    </div>
  );
}

// Book Component (Displays individual book details)
function Book({ title, author, summary }) {
  return (
    <div className="book">
      <h2>{title}</h2>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>{summary}</p>
    </div>
  );
}

function App() {
  // Sample data for books
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      summary: "A story of love, wealth, and tragedy in the 1920s.",
    },
    {
      title: "1984",
      author: "George Orwell",
      summary: "A dystopian novel exploring the dangers of totalitarianism.",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      summary: "A novel about racial injustice in the American South.",
    },
  ];

  // Determine if the library is open based on current hour
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 9 && currentHour < 18;

  return (
    <div className="app">
      <h1>Library Book Display</h1>

      {/* LibraryStatus component to show open/closed status */}
      <LibraryStatus isOpen={isOpen} />

      <div className="book-list">
        {/* Render each book using the Book component */}
        {books.map((book, index) => (
          <Book
            key={index}
            title={book.title}
            author={book.author}
            summary={book.summary}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
