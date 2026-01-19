import Flashcard from "./Flashcard";

function App() {

  const flashcards = [
    {
      question: "What is a closure in JavaScript?",
      answer: "A closure is a function that remembers its outer variables even after the outer function has executed."
    },
    {
      question: "What is a closure in JavaScript?",
      answer: "A closure is a function that remembers its outer variables even after the outer function has executed."
    },
    {
      question: "What is a closure in JavaScript?",
      answer: "A closure is a function that remembers its outer variables even after the outer function has executed."
    }
  ];

  const currentcard = flashcards[0];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>JavaScript Flashcards</h1>

      <Flashcard 
        question={currentcard.question}
        answer={currentcard.answer}
      />
    </div>
  );
}

export default App;