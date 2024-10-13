import { useEffect, useState } from "react";

function useEffectOnce(effect) {
  useEffect(() => {
    return effect();
  }, []);
}

/* Usage example */

export default function App() {
  const [value, setValue] = useState();

  useEffectOnce(() => {
    setValue("once!");
  });

  return (
    <div>
      <p>value: {value}</p>
    </div>
  );
}
