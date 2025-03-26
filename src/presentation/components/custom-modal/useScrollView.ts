import { useCallback, useRef } from 'react';

export function useScrollView() {
  const restoreScrollFn = useRef(() => {});

  const hideScroll = useCallback(() => {
    restoreScrollFn.current = getRestoreScrollFn();

    document.body.style.overflow = 'hidden';
    if (document.body.parentElement) {
      document.body.parentElement.style.overflow = 'hidden';
    }
  }, []);

  const restoreScroll = useCallback(() => {
    restoreScrollFn.current();
  }, []);

  return { hideScroll, restoreScroll };
}

function getRestoreScrollFn() {
  const bodyOverflow = document.body.style.overflow;
  const htmlOverflow = document.body.parentElement?.style.overflow;

  return function restoreOverflow() {
    document.body.style.overflow = bodyOverflow || '';
    if (document.body.parentElement) {
      document.body.parentElement.style.overflow = htmlOverflow || '';
    }
  };
}
