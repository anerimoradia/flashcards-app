import { useState } from "react";

function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      onClick={() => setFlipped(!flipped)}
      style={{
        width: "350px",
        height: "220px",
        perspective: "1000px",
        cursor: "pointer",
        marginTop: "2rem"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1rem"
          }}
        >
          <h2>Question</h2>
          <p>{question}</p>
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "#222",
            color: "white",
            borderRadius: "10px",
            padding: "1rem",
            transform: "rotateY(180deg)"
          }}
        >
          <h2>Answer</h2>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;