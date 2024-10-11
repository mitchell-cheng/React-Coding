import { useState, useEffect } from "react";

function useSWR(_key, fetcher) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const fetchResult = fetcher();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchResult;
        setData(response);
      } catch (err) {
        setError(err);
      }
    };

    if (fetchResult instanceof Promise) {
      fetchData();
    }
  }, []);

  const result = fetchResult instanceof Promise ? data : fetchResult;

  return {
    data: result,
    error,
  };
}

/* Usage example */

export default function App() {
  return <div></div>;
}