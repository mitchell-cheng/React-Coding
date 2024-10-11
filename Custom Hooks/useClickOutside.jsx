import { useRef, useEffect } from "react";

function useClickOutside(callbackFn) {
  const ref = useRef(null);

  useEffect(() => {
    const click = ({ target }) => {
      if (target && ref.current && !ref.current.contains(target)) {
        callbackFn();
      }
    };

    document.addEventListener("mousedown", click);

    return () => {
      document.removeEventListener("mousedown", click);
    };
  }, []);

  return ref;
}

/* Usage example */

export default function App() {
  const ref = useClickOutside();

  return <button>ClickOutside: {String(ref.current)}</button>;
}
