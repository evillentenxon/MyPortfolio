import { useState, useEffect } from "react";

const Counter = ({ end = 100, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end, duration]);

  return <span>{count}</span>;
};

export default Counter;
