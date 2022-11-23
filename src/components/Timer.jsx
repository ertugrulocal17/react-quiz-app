import React, { useEffect, useState } from "react";

const Timer = ({ setStop, questionNumber }) => {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    if (timer === 0) return setStop(true);
    const inteval = setInterval(() => {
      setTimeout(() => {
        setTimer(prev => prev - 1);
      });
    }, 1000);
    return () => clearInterval(inteval);
  }, [setStop, timer]);
  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  return timer;
};

export default Timer;
