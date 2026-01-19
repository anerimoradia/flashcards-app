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
    <div 
      style={{ 
        padding: "2rem", 
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "400px",
        width: "100%",
        margin: "0 auto"
      }}
    >
      <h1>JavaScript Flashcards</h1>

      <ProgressBar current={index} total={flashcards.length} />

      <Flashcard 
        question={currentCard.question}
        answer={currentCard.answer}
      />

      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          width: "100%",
          maxWidth: "350px"
        }}
      >
        <button
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            background: index === 0 ? "#ccc" : "#667eea",
            color: "white",
            cursor: index === 0 ? "not-allowed" : "pointer"
          }}
        >
          ← Previous
        </button>

        <button
          onClick={() => setIndex(index + 1)}
          disabled={index === flashcards.length - 1}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            background: index === flashcards.length - 1 ? "#ccc" : "#f5576c",
            color: "white",
            cursor: index === flashcards.length - 1 ? "not-allowed" : "pointer"
          }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default App;