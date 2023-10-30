import { useCallback } from "react";

export const useFetch = () => {
  const request = useCallback(async (url, method = "GET", body = null) => {
    try {
      const response = await fetch(url, { method, body });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }, []);
  return { request };
};
