function ProgressBar({ current, total }) {
    const percentage = ((current + 1) / total) * 100;
  
    return (
      <div style={{ width: "100%", height: "8px", background: "#eee", borderRadius: "5px", marginBottom: "1rem" }}>
        <div 
          style={{
            width: `${percentage}%`,
            height: "100%",
            background: "#4caf50",
            borderRadius: "5px",
            transition: "width 0.3s ease"
          }}
        ></div>
      </div>
    );
  }
  
  export default ProgressBar;