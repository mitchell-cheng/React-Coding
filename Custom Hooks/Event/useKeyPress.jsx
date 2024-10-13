import { useState, useEffect, useCallback } from "react";

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);
  const handleKeyDown = useCallback((event) => {
    if (event.key === targetKey) {
      setKeyPressed(true);
    }
  }, []);
  const handleKeyUp = useCallback((event) => {
    if (event.key === targetKey) {
      setKeyPressed(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return keyPressed;
}

function App() {
  const isSpacePressed = useKeyPress(" "); // Detect spacebar press
  const isEnterPressed = useKeyPress("Enter"); // Detect Enter key press

  return (
    <div>
      <h2>Key Press Demo</h2>
      <p>Press and hold the Spacebar or Enter key</p>
      <div>
        Spacebar pressed: <strong>{isSpacePressed ? "Yes" : "No"}</strong>
      </div>
      <div>
        Enter key pressed: <strong>{isEnterPressed ? "Yes" : "No"}</strong>
      </div>
    </div>
  );
}

export default App;
