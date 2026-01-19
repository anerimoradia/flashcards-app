function ProgressBar({ current, total }) {
    const percentage = ((current + 1) / total) * 100;

    return (
        <div style ={{
            width: "100%",
            height: "20px",
            background: "#eee",
            borderRadius: "5px",
            marginTop: "1rem",
        }}>
            <div style={{
                width: `${percentage}%`,
                height: "100%",
                background: "blue",
                borderRadius: "5px",
            }}
            ></div>
        </div>
    );
}

export default ProgressBar;