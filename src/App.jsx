import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const reverseTime = () => {
    const reversedTimeString = currentTime.toLocaleTimeString().split('').reverse().join('');
    return reversedTimeString;
  };

  return (
    <div className="App">
    <div className="DigitalClock">
      <h1 className="ClockText">Reverse Clock</h1>
      <p className="ClockText">{reverseTime()}</p>
    </div>
  </div>
);
}

export default App;
