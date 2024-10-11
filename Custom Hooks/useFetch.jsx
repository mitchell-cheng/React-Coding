import { useState, useEffect } from "react";

function useFetch(url, method = "get") {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url, {
      method,
    })
      .then((response) => {
        if (!response.ok) {
          setError(response.status);
        }

        return response.json();
      })
      .then((data) => {
        setData(JSON.stringify(data));
      });
  }, [url]);

  return {
    data,
    error,
  };
}

/* Usage example */

export default function App() {
  const { data, error } = useFetch("https://randomuser.me/api/");

  return (
    <div>
      <p>Fetch result: {data ?? error}</p>
    </div>
  );
}
