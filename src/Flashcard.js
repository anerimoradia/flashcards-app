import { useState } from 'react';

function Flashcard({ question, answer }) {
    const [flipped, setIsFlipped] = useState(false);

    return(
        <div
            onClick={() => setIsFlipped(!isFlipped)}
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                maxWidth: "300px",
                marginTop: "1rem",
                cursor: "pointer",
                background: flipped ? "#222" : "#fff",
                color: flipped ? "#fff" : "#000",
                transition: "0.3s ease"
            }}
        >
            {flipped ? (
                <>
                    <h2>Answer</h2>
                    <p>{answer}</p>
                </>
            ) : (
                <>
                    <h2>Question</h2>
                    <p>{question}</p>
                </>
            )}
        </div>
    );
}
export default Flashcard;