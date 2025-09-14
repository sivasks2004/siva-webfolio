import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnMount?: boolean;
  delayMs?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnMount = false, delayMs = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (triggerOnMount) {
      // For hero/above-the-fold elements, trigger animation after paint
      let animationId: number;
      let timeoutId: NodeJS.Timeout;

      const triggerAnimation = () => {
        animationId = requestAnimationFrame(() => {
          animationId = requestAnimationFrame(() => {
            if (delayMs > 0) {
              timeoutId = setTimeout(() => {
                setIsVisible(true);
              }, delayMs);
            } else {
              setIsVisible(true);
            }
          });
        });
      };

      triggerAnimation();

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    } else {
      // Original intersection observer logic for scroll-triggered animations
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        {
          threshold,
          rootMargin,
        }
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
    }
  }, [threshold, rootMargin, isVisible, triggerOnMount, delayMs]);

  return { ref, isVisible };
}
