import { useEffect, useRef, useState } from "react";
import { isTypeReferenceNode } from "typescript";

function useCountdown(initialValue) {
  const [count, setCount] = useState(initialValue);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  function start() {
    setIsActive(true);
  }

  function pause() {
    setIsActive(false);
    clearInterval(intervalRef.current);
  }

  function reset() {
    setCount(initialValue);
    setIsActive(false);
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    if (isActive && count > 0) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (count === 0) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [count, isActive]);

  return { count, isActive, start, pause, reset };
}

export default function App() {
  const { count, isActive, start, pause, reset } = useCountdown(10);

  return (
    <div>
      <h1>Countdown: {count}</h1>
      <button onClick={start} disabled={isActive}>
        Start
      </button>
      <button onClick={pause} disabled={!isActive}>
        Pause
      </button>
      <button onClick={reset}>Reset</button>
      {count === 0 && <p>Time's up!</p>}
    </div>
  );
}
