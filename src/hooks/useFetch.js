import { useState, useEffect } from "react";

const useFetch = (url, queryString) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  let controller;
  useEffect(() => {
    controller = new AbortController();
    let signal = controller.signal;
    setLoading(true);
    setError(false);
    const path = queryString ? url + "?" + queryString : url;
    fetch(url, { signal: signal })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setResponse(res);
        setLoading(false);
      })
      .catch((e) => {
        if (e.includes("DOMException")) {
          console.log("fetch cancelled ", e);
          return;
        }

        setError(true);
      });
    return () => controller.abort();
  }, [url, queryString]);
  return [loading, error, response];
};

export default useFetch;
