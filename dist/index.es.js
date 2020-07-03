import React, { useCallback } from 'react';

function syncScroll(target, others, TopLeft, WidthHeight) {
  const percentage = target[`scroll${TopLeft}`] / (target[`scroll${WidthHeight}`] - target[`offset${WidthHeight}`]); // eslint-disable-next-line no-undef

  window.requestAnimationFrame(() => {
    others.forEach(el => {
      el[`scroll${TopLeft}`] = Math.round(percentage * (el[`scroll${WidthHeight}`] - el[`offset${WidthHeight}`]));
    });
  });
}

function syncVerticalScroll(target, others) {
  syncScroll(target, others, 'Top', 'Height');
}

function syncHorizontalScroll(target, others) {
  syncScroll(target, others, 'Left', 'Width');
}

function useSyncScroll({
  vertical,
  horizontal
}) {
  const elementsRef = React.useRef([]);
  const locksRef = React.useRef(0);
  const refCallback = useCallback(element => {
    const currentElements = elementsRef.current;

    if (element) {
      // eslint-disable-next-line
      element.addEventListener('scroll', handleScroll);
      currentElements.push(element);
    } else {
      // eslint-disable-next-line
      currentElements.forEach(el => el.removeEventListener('scroll', handleScroll));
      currentElements.splice(0, currentElements.length);
    }

    function handleScroll({
      target
    }) {
      if (locksRef.current > 0) {
        locksRef.current -= 1; // Release lock by 1

        return;
      }

      locksRef.current = elementsRef.current.length - 1; // Acquire lock

      const others = elementsRef.current.filter(ref => ref !== target);
      if (vertical) syncVerticalScroll(target, others);
      if (horizontal) syncHorizontalScroll(target, others);
    }
  }, [horizontal, vertical]);
  return refCallback;
}

export default useSyncScroll;
