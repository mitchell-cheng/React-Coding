import { useEffect, useRef } from "react";

function useIsMounted() {
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return () => isMountedRef.current;
}

/* Usage example */

export default function App() {
  const isFirstMount = useIsMounted();

  return (
    <div>
      <p>Is first mount: {String(isFirstMount())}</p>
    </div>
  );
}
