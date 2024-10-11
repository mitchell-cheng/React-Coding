import { useRef, useState, useEffect, useCallback } from "react";

function useFocus() {
  const [isFocus, setIsFocus] = useState(false);
  const focusRef = useRef(null);
  const handleFocus = useCallback(() => {
    setIsFocus(true);
  }, []);
  const handleBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  useEffect(() => {
    const node = focusRef.current;

    setIsFocus(document.activeElement === node);

    if (node) {
      node.addEventListener("focus", handleFocus);
      node.addEventListener("blur", handleBlur);
    }

    return () => {
      node.removeEventListener("focus", handleFocus);
      node.removeEventListener("blur", handleBlur);
    };
  }, [focusRef.current]);

  return [focusRef, isFocus];
}

/* Usage example */

export default function App() {
  const [focusRef, isFocus] = useFocus();

  return (
    <div>
      <input ref={focusRef} value={isFocus} />
    </div>
  );
}