// This interface defines the props for the Loader component.
// It tells the component whether to show or hide the loading spinner.
interface LoaderProps {
  isLoading: boolean;
}

// This is a reusable Global Loader component to show a loading screen across the project.
export default function Loader({ isLoading }: LoaderProps) {
  
  // If isLoading is false, do not show anything on the screen.
  if (!isLoading) return null;

  return (
    // This div creates a full-screen background overlay that is semi-transparent and slightly blurred.
    <div 
      className="loader-backdrop"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(15, 23, 42, 0.6)", 
        backdropFilter: "blur(4px)", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999, // This ensures the loader stays on top of all other elements.
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* This div creates the circular blue loading spinner that rotates infinitely. */}
        <div 
          className="spinner"
          style={{
            width: "50px",
            height: "50px",
            border: "5px solid #e2e8f0",
            borderTop: "5px solid #2563eb", // Corporate blue brand color.
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            margin: "0 auto 15px auto"
          }}
        ></div>
        
        {/* Simple text message to guide users while data is loading. */}
        <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "16px", margin: 0 }}>
          Loading content, please wait...
        </p>
      </div>

      {/* This inline style tag defines the rotating animation for the spinner. */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
