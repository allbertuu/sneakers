import { useCallback, useState } from 'react';

export default function useToggle(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggle = useCallback(() => setIsOpen(isOpen => !isOpen), []);
  isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
  return [isOpen, toggle];
}