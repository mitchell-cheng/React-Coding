import { useEffect, useRef } from 'react';

export function useTimeout(callback: () => void, delay: number) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      savedCallback.current();
    }, delay);

    return () => clearTimeout(timerId);
  }, [delay]);
}