import { useState, useEffect } from 'react';

export const Clock  = () => {
  const getCurrentTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const timeZone = date.toLocaleTimeString('en-us', {timeZoneName: 'short'}).split(' ')[2]; // Extracting the time zone abbreviation
    return { time: `${hours}:${minutes}`, zone: timeZone };
  }

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000); 

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p>{currentTime.time} {currentTime.zone}</p>
  )
}

