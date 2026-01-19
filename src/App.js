import { useState } from "react";
import Flashcard from "./Flashcard";
import ProgressBar from "./ProgressBar";

function App() {
  const flashcards = [
    {
      question: "What is a closure in JavaScript?",
      answer: "A closure is a function that remembers its outer variables even after the outer function has executed."
    },
    {
      question: "What is the difference between let and const?",
      answer: "let can be reassigned; const cannot."
    },
    {
      question: "What is the event loop?",
      answer: "The event loop handles asynchronous callbacks and manages the call stack and task queue."
    }
  ];

  const [index, setIndex] = useState(0);
  const currentCard = flashcards[index];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>JavaScript Flashcards</h1>
      <ProgressBar current={index} total={flashcards.length} />
      <br />
      <Flashcard 
        question={currentCard.question}
        answer={currentCard.answer}
      />

      <div style={{ marginTop: "1rem" }}>
        <button 
          onClick={() => setIndex(index - 1)} 
          disabled={index === 0}
          style={{ marginRight: "1rem" }}
        >
          Previous
        </button>

        <button 
          onClick={() => setIndex(index + 1)} 
          disabled={index === flashcards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;