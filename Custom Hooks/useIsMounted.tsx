import { useEffect, useRef } from 'react';

export function useIsMounted(): () => boolean {
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    }
  }, [])

  return () => isMountedRef.current;
}