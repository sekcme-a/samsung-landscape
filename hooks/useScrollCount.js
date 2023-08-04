

import { useRef, useEffect, useCallback } from 'react';

const useScrollCount = (end, start = 0, durationInSeconds = 3, delayInSeconds = 0) => {
  const element = useRef();
  const observer = useRef(null);
  const totalSteps = Math.abs(end - start);
  const stepTime = Math.abs(Math.floor((durationInSeconds * 1000) / totalSteps));
  let animationFrameId;

  const animateValue = useCallback(
    (start, end, duration) => {
      let startTime = null;
      const updateStep = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const value = Math.floor(start + totalSteps * percentage);

        // Format the value with commas
        const formattedValue = value.toLocaleString();

        element.current.innerHTML = formattedValue;

        if (progress < duration) {
          animationFrameId = requestAnimationFrame(updateStep);
        } else {
          if (observer.current) {
            observer.current.disconnect();
          }
        }
      };
      animationFrameId = requestAnimationFrame(updateStep);
    },
    [totalSteps],
  );

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        animateValue(start, end, durationInSeconds * 1000);
      }
    },
    [animateValue, start, end, durationInSeconds],
  );

  useEffect(() => {
    if (element.current) {
      observer.current = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.current.observe(element.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;
