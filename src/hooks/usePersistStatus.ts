import { useEffect, useState } from 'react';
import { persistor } from '../store/store';

export const usePersistStatus = () => {
  const [isRehydrated, setIsRehydrated] = useState(false);

  useEffect(() => {
    const unsubscribe = persistor.subscribe(() => {
      const { bootstrapped } = persistor.getState();
      if (bootstrapped) {
        setIsRehydrated(true);
        unsubscribe();
      }
    });

    // Check if already bootstrapped
    const { bootstrapped } = persistor.getState();
    if (bootstrapped) {
      setIsRehydrated(true);
    }

    return unsubscribe;
  }, []);

  return isRehydrated;
};
