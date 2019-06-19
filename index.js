import React from "react";

function syncScroll(target, others, TopLeft, WidthHeight) {
  const percentage =
    target[`scroll${TopLeft}`] /
    (target[`scroll${WidthHeight}`] - target[`offset${WidthHeight}`]);

  others.forEach(el => {
    el[`scroll${TopLeft}`] = Math.round(
      percentage * (el[`scroll${WidthHeight}`] - el[`offset${WidthHeight}`])
    );
  });
}

function syncVerticalScroll(target, others) {
  syncScroll(target, others, "Top", "Height");
}

function syncHorizontalScroll(target, others) {
  syncScroll(target, others, "Left", "Width");
}

function useSyncScroll(refCount, { vertical, horizontal }) {
  const refs = React.useRef(
    Array.from({ length: refCount }, () => React.createRef(null))
  );

  const locksRef = React.useRef(0);

  React.useEffect(() => {
    function handleScroll({ target }) {
      if (locksRef.current > 0) {
        locksRef.current -= 1; // Release lock by 1
        return;
      }

      locksRef.current = refCount - 1; // Acquire lock

      const others = refs.current.reduce((result, ref) => {
        if (ref.current && ref.current !== target) result.push(ref.current);
        return result;
      }, []);

      if (vertical) syncVerticalScroll(target, others);
      if (horizontal) syncHorizontalScroll(target, others);
    }

    const elements = refs.current.reduce((result, ref) => {
      if (ref.current) result.push(ref.current);
      return result;
    }, []);

    elements.forEach(el => el.addEventListener("scroll", handleScroll));

    return () => {
      elements.forEach(el => el.removeEventListener("scroll", handleScroll));
    };
  }, [refCount, vertical, horizontal, locksRef]);

  return refs.current;
}

export default useSyncScroll;
