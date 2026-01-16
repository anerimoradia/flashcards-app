import Flashcard from "./Flashcard";

function App() {
  const question = "What is a closure in JavaScript?";
  const answer = "A closure is a function that remembers its outer variables even after the outer function has executed.";

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>JavaScript Flashcards</h1>

      <Flashcard 
        question={question}
        answer={answer}
      />
    </div>
  );
}

export default App;