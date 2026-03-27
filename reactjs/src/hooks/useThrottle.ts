import { useEffect, useRef, useState } from "react";

export function useThrottle<T>(value: T, delay: number): T {
  const [throttled, setThrottled] = useState(value);
  const lastRan = useRef(0);

  useEffect(() => {
    const handler = setTimeout(
      () => {
        const now = Date.now();
        if (now - lastRan.current >= delay) {
          setThrottled(value);
          lastRan.current = now;
        }
      },
      delay - (Date.now() - lastRan.current),
    );
    return () => clearTimeout(handler);
  }, [value, delay]);
  return throttled;
}
