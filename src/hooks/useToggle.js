import { useCallback, useState } from 'react';

export default function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState(state => !state), []);
  state ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  return [state, toggle];
}