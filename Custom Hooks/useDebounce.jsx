import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
}

/* Usage example */

export default function App() {
  const value = useDebounce(2, 2000);

  return (
    <div>
      <p>Value: {value}</p>
    </div>
  );
}
