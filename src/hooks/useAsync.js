import { useCallback, useState } from 'react';

// Example usage:
// const {data, error, status, run} = useAsync()
// React.useEffect(() => {
//   run(fetchData())
// }, [run])
function useAsync(initialState) {
  const [data, setData] = useState(initialState?.data ?? null);
  const [isLoading, setIsLoading] = useState(initialState?.isLoading ?? false);
  const [error, setError] = useState(initialState?.error ?? null);

  const run = useCallback(
    async (promise) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`,
        );
      }
      try {
        setIsLoading(true);
        const result = await promise;
        setData(result);
        setIsLoading(false);
        return result;
      } catch (e) {
        setIsLoading(false);
        setError(e);
        return Promise.reject(e);
      }
    },
    [setData, setError, setIsLoading],
  );

  return {
    data,
    setData,
    isLoading,
    error,
    run,
  };
}

export { useAsync };
