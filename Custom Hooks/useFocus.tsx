import { Ref, useRef, useState, useEffect, useCallback } from 'react';

export function useFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
  const focusRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  useEffect(() => {
    const node = focusRef.current;

    setIsFocused(document.activeElement === node);

    if (node) {
      node.addEventListener('focus', handleFocus);
      node.addEventListener('blur', handleBlur);
    }

    return () => {
      node.removeEventListener('focus', handleFocus);
      node.removeEventListener('blur', handleBlur)
    }
  }, [focusRef.current]);

  return [focusRef, isFocused];
}