import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    function tick() {
      setCurrentTime(new Date());
    }

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    if (hours === 23 && minutes === 47 && seconds === 0) { // 11:47:00 PM in 24-hour format
      console.log('Result A');
    };
  }, [currentTime]);

  return (
    <div>
      <h2>It is {currentTime.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default Clock;
