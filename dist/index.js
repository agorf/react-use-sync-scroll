(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = global || self, global.useSyncScroll = factory(global.React));
}(this, (function (React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

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
    const elementsRef = React__default.useRef([]);
    const locksRef = React__default.useRef(0);
    const refCallback = React.useCallback(element => {
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

  return useSyncScroll;

})));
