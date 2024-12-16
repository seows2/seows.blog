import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useDidUpdate = (effect: EffectCallback, deps: DependencyList) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    return effect();
  }, deps);
};
