import { useState, useRef, useEffect, useCallback } from "react";

function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  useEffect(() => {
    setIsHovered(false);

    const node = ref.current;

    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [ref.current, handleMouseEnter, handleMouseLeave]);

  return [ref, isHovered];
}

/* Usage example */

export default function App() {
  const [inputRef, isHovered] = useHover();

  return (
    <div>
      <input ref={inputRef} value={isHovered} />
    </div>
  );
}
