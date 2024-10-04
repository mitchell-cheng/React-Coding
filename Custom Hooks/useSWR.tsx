import { useState, useEffect } from 'react';

export function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>
): {
  data?: T
  error?: E
} {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<E>();
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
  }
}