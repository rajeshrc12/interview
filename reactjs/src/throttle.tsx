import { useEffect, useState } from "react";
import { useThrottle } from "./hooks/useThrottle";

const Throttle = () => {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 1000);
  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  console.log(`Throttled Scroll Y: ${window.scrollY}px`);

  return (
    <div>
      Throttled Scroll Y: {throttledScrollY}px
      {new Array(50).fill(0).map((_, i) => (
        <div key={i}>hi</div>
      ))}
    </div>
  );
};

export default Throttle;
