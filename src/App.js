function App() {
  const question = "What is a closure in JavaScript?";
  const answer = "A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.";

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>JavaScript Flashcards</h1>
      <div 
        style={{ 
          border: "1px solid #ccc", 
          borderRadius: "8px", 
          padding: "1rem", 
          maxWidth: "600px" 
          }}
        >

          <h2>Question:</h2>
          <p>{question}</p>
        
          <h2>Answer:</h2>
          <p>{answer}</p>
          
      </div>
    </div>
  );
}

export default App;