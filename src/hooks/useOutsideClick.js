import { useState, useEffect } from 'react';

const useOutsideClick = (isVisible, refs) => {
  const [isOpen, setIsOpen] = useState(isVisible);

  const handleOutsideClick = event => {
    if (refs.every(ref => ref.current && !ref.current.contains(event.target))) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  });

  return { isOpen, setIsOpen };
};

export default useOutsideClick;
