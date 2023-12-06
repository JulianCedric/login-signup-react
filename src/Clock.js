import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    function tick() {
      setCurrentTime(new Date());
    };

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2>It is {currentTime.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default Clock;