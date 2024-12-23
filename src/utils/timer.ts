import { useState, useEffect } from "react";

const Timer: React.FC<{ initialTime: number }> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [time]);
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return formatTime(time);
};
export default Timer;
