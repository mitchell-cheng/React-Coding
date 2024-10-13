import { useReducer } from "react";

const updateReducer = (num) => (num + 1) % 1_000_000;

function useUpdate() {
  const [_, update] = useReducer(updateReducer, 0);

  return update;
}

export default function App() {
  return <div></div>;
}
