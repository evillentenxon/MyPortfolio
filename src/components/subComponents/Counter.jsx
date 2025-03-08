import { useState, useEffect, useRef } from "react";

const Counter = ({ end = 100, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after triggering
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Start counting only when visible

    let start = 0;
    const increment = end / (duration / 10); // Adjust speed
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.round(start));
    }, 10);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}</span>;
};

export default Counter;
