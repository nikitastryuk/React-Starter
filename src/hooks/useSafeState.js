import { useCallback, useLayoutEffect, useRef, useState } from 'react';

export const useSafeState = (initialState) => {
  const isMounted = useRef(false);
  const [state, setState] = useState(initialState);

  useLayoutEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const setSafeState = useCallback((data) => {
    if (isMounted.current) {
      setState(data);
    }
  }, []);

  return [state, setSafeState];
};
