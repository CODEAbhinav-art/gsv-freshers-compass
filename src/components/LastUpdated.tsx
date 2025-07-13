
import { useState, useEffect } from 'react';

export const LastUpdated = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const lastUpdatedDate = "July 13, 2025";

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium">
          🕒 Website Last Updated: {lastUpdatedDate} | Current Time: {currentTime.toLocaleString()} | 
          Latest Updates: FAQ Section Enhanced, GSV Gallery Improved, Learning Resources Reorganized | 
          Welcome to GSV Freshers' Guide - Your Complete Resource Hub! | 
          🕒 Website Last Updated: {lastUpdatedDate} | Current Time: {currentTime.toLocaleString()} | 
          Latest Updates: FAQ Section Enhanced, GSV Gallery Improved, Learning Resources Reorganized | 
          Welcome to GSV Freshers' Guide - Your Complete Resource Hub! |
        </span>
      </div>
    </div>
  );
};
