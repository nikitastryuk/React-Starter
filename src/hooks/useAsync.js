import { useCallback } from 'react';

import { useSafeState } from 'hooks/useSafeState';

function useAsync(initialState) {
  const [data, setData] = useSafeState(initialState?.data ?? null);
  const [isLoading, setIsLoading] = useSafeState(initialState?.isLoading ?? false);
  const [error, setError] = useSafeState(initialState?.error ?? null);

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
        return result;
      } catch (e) {
        setError(e);
        return Promise.reject(e);
      } finally {
        setIsLoading(false);
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
