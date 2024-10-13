import { useEffect, useRef } from 'react';

function useIsFirstRender() {
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);

  return isFirstRenderRef.current;
}

/* Usage example */

export default function App() {
  const isFirst = useIsFirstRender();

  return (
    <div>
      <p>Is first render: {String(isFirst)}</p>
    </div>
  );
}