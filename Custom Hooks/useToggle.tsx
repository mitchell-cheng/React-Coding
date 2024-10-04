import { useState, useCallback } from 'react';

export function useToggle(on: boolean): [boolean, () => void] {
  const [isToggled, setIsToggled] = useState(on);

  const toggle = useCallback(() => {
    setIsToggled((t) => !t);
  }, []);

  return [isToggled, toggle];
}