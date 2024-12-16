import { useState } from 'react';

export const useBooleanState = (
  init = false
): readonly [boolean, () => void, () => void, () => void] => {
  const [bool, setBool] = useState(init);

  const setTrue = () => setBool(true);
  const setFalse = () => setBool(false);
  const toggle = () => setBool((b) => !b);

  return [bool, setTrue, setFalse, toggle];
};
