
import { useState, useEffect } from 'react';

export const LastUpdated = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const lastUpdatedDate = "January 1, 2025"; // Update this date when you make changes to the website

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium">
          🕒 Website Last Updated: {lastUpdatedDate} | Current Time: {currentTime.toLocaleString()} | 
          Welcome to GSV Freshers' Guide - Your Complete Resource Hub! | 
          🕒 Website Last Updated: {lastUpdatedDate} | Current Time: {currentTime.toLocaleString()} | 
          Welcome to GSV Freshers' Guide - Your Complete Resource Hub! |
        </span>
      </div>
    </div>
  );
};
