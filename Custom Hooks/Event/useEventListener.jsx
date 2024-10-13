import { useEffect, useState } from "react";

function useEventListener(eventName, handler, element = window) {
  useEffect(() => {
    const isSupported = element && element.addEventListener;

    if (!isSupported) {
      return;
    }

    const eventListener = (event) => {
      handler(event);
    };

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, handler, element]);
}

// Usage example
export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEventListener("click", handleClick);

  return (
    <div>
      <h2>Click Count: {count}</h2>
      <p>Click anywhere in the window to increment the count.</p>
    </div>
  );
}
