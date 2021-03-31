import { useEffect, useState } from 'react';

import ls from 'utils/localStorage';

export function useLocalStorageState(lsKey, defaultValue) {
  // Lazy initial state
  // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [state, setState] = useState(() => ls.getItem(lsKey) ?? defaultValue);

  useEffect(() => {
    ls.setItem(lsKey, state);
  }, [lsKey, state]);

  return [state, setState];
}
