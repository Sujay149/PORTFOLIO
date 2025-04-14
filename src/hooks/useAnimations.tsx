
import { useState, useEffect, useRef, RefObject } from 'react';

export function useFadeInOnScroll(threshold = 0.1): {
  ref: RefObject<HTMLDivElement>;
  isVisible: boolean;
} {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

export function useSequentialAnimation(
  itemCount: number,
  staggerDelay = 100,
  initialDelay = 0
): boolean[] {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>(
    Array(itemCount).fill(false)
  );

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Initial delay before starting the sequence
    const initialTimer = setTimeout(() => {
      // Stagger the animation of each item
      for (let i = 0; i < itemCount; i++) {
        const timer = setTimeout(() => {
          setAnimatedItems((prev) => {
            const newState = [...prev];
            newState[i] = true;
            return newState;
          });
        }, i * staggerDelay);
        
        timers.push(timer);
      }
    }, initialDelay);

    timers.push(initialTimer);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [itemCount, staggerDelay, initialDelay]);

  return animatedItems;
}
