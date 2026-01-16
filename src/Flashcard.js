function Flashcard ({ question, answer}) {
    return(
        <div
        style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            maxWidth: "600px",
            marginTop: "1rem"
        }}
        >
            <h2>Question:</h2>
            <p>{question}</p>

            <h2>Answer:</h2>
            <p>{answer}</p>
        </div>
    );
}

export default Flashcard;