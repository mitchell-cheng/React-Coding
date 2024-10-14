import { useRef, useCallback, useState } from "react";

function useThrottle(callback, delay) {
  const lastCall = useRef(0);
  const timerId = useRef(null);

  const throttledFunction = useCallback((...args) => {
    const now = Date.now();

    if (lastCall.current === 0 || now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    } else if (!timerId.current) {
      timerId.current = setTimeout(() => {
        lastCall.current = Date.now();
        callback(...args);
        timerId.current = null;
      }, delay - (now - lastCall.current));
    }
  }, [callback, delay]);

  return throttledFunction;
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleScroll = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("Scroll event triggered", count);
  };

  const throttledScroll = useThrottle(handleScroll, 1000); // Throttle to 1 second

  return (
    <div
      onScroll={throttledScroll}
      style={{ height: "200vh", padding: "20px" }}
    >
      <h2>Scroll down to see throttling in action!</h2>
      <p>Scroll Count: {count}</p>
    </div>
  );
}
