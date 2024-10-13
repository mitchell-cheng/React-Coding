import { useEffect, useRef, useState } from "react";

function useInterval(callbackFn, delay) {
  const callbackFnRef = useRef(callbackFn);

  useEffect(() => {
    callbackFnRef.current = callbackFn;
  }, [callbackFn]);

  useEffect(() => {
    const timerId = setInterval(() => {
      callbackFnRef.current();
    }, delay);

    return () => clearInterval(timerId);
  }, [delay]);
}

/* Usage example */

export default function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return <div>Count: {count}</div>;
}