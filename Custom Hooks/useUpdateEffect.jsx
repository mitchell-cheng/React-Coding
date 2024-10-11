import { useRef, useEffect } from "react";

function useUpdateEffect(effect, deps) {
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }

    return effect();
  }, deps);
}

export default function App() {
  const fetchData = () => {};

  const effect = useUpdateEffect(fetchData);
  return (
    <div>
      <p></p>
    </div>
  );
}