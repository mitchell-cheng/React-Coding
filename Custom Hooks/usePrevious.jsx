import { useRef, useEffect } from "react";

function usePrevious(value) {
  const previousRef = useRef();

  useEffect(() => {
    previousRef.current = value;
  }, [value]);

  return previousRef.current;
}

/* Usage example */

export default function App() {
  const previousValue = usePrevious(1);

  return (
    <div>
      <p>Previous value: {previousValue}</p>
    </div>
  );
}
