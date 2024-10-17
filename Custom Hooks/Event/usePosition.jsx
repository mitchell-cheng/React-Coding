import { useState, useEffect, useRef } from "react";

function usePosition(ref) {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const { top, left } = ref.current.getBoundingClientRect();
        setPosition({ top, left });
      }
    };

    // Initial position update
    updatePosition();

    // Set up a resize observer to listen for position changes
    const resizeObserver = new ResizeObserver(updatePosition);
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    // Cleanup function to disconnect the observer
    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  }, [ref]); // Re-run when the ref changes

  return position;
}

function PositionDisplay() {
  const ref = useRef(null);
  const position = usePosition(ref);

  return (
    <div>
      <h2>Element Position:</h2>
      <div
        ref={ref}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "lightblue",
          position: "relative",
        }}
      >
        Move me around!
      </div>
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Listening to Element Position Changes</h1>
      <PositionDisplay />
    </div>
  );
}
