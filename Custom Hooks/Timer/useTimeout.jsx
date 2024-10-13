import { useEffect, useRef, useState } from 'react';

function useTimeout(callbackFn, delay) {
  const callbackFnRef = useRef(callbackFn);

  useEffect(() => {
    callbackFnRef.current = callbackFn;
  }, [callbackFn]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      callbackFnRef.current();
    }, delay);

    return () => clearTimeout(timerId);
  }, [delay]);
}

/* Usage example */

export default function App() {
  const [count, setCount] = useState(0);

  useTimeout(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  return <div>Count: {count}</div>;
}