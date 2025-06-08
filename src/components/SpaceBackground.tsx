
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export const SpaceBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate initial stars
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2
        });
      }
      setStars(newStars);
    };

    generateStars();

    // Animation loop
    const animate = () => {
      setStars(prevStars => 
        prevStars.map(star => ({
          ...star,
          y: star.y + star.speed,
          x: star.x + Math.sin(star.y * 0.01) * 0.5,
          // Reset star when it goes off screen
          ...(star.y > window.innerHeight ? {
            y: -10,
            x: Math.random() * window.innerWidth
          } : {})
        }))
      );
    };

    const interval = setInterval(animate, 50);

    // Handle window resize
    const handleResize = () => {
      generateStars();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Space Background */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900">
        {/* Enhanced Black Hole - Much More Visible */}
        <div className="absolute top-1/4 left-1/3 w-48 h-48 black-hole z-10">
          {/* Outer event horizon with strong glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-purple-900/80 to-black shadow-[0_0_200px_50px_rgba(147,51,234,0.8)] animate-spin-slow"></div>
          
          {/* Middle accretion disk */}
          <div className="absolute inset-3 rounded-full bg-gradient-radial from-transparent via-orange-500/60 to-purple-900/90 shadow-[0_0_150px_30px_rgba(251,146,60,0.6)] animate-spin-reverse"></div>
          
          {/* Inner disk with intense glow */}
          <div className="absolute inset-6 rounded-full bg-gradient-radial from-transparent via-blue-500/70 to-black shadow-[0_0_100px_20px_rgba(59,130,246,0.8)] animate-spin-slow"></div>
          
          {/* Event horizon - pure black center */}
          <div className="absolute inset-12 rounded-full bg-black shadow-[inset_0_0_50px_rgba(0,0,0,1)]"></div>
          
          {/* Gravitational lensing effect */}
          <div className="absolute -inset-8 rounded-full border-2 border-purple-400/30 animate-pulse"></div>
          <div className="absolute -inset-12 rounded-full border border-blue-400/20 animate-pulse delay-1000"></div>
        </div>
        
        {/* Nebula Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-purple-900/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        
        {/* Falling Stars */}
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}px`,
              top: `${star.y}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`
            }}
          />
        ))}

        {/* Additional shooting stars */}
        <div className="shooting-star absolute top-1/4 left-0 w-2 h-2 bg-white rounded-full opacity-80"></div>
        <div className="shooting-star absolute top-1/2 left-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-60 delay-3000"></div>
        <div className="shooting-star absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-70 delay-6000"></div>
      </div>

      {/* GSV 2025 Hologram */}
      <div className="fixed bottom-10 right-10 -z-40 pointer-events-none">
        <div className="relative">
          <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse hologram-text">
            GSV
          </div>
          <div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mt-2 hologram-text">
            2025
          </div>
          {/* Hologram scan lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent animate-scan opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/10 to-transparent animate-scan-reverse opacity-30"></div>
        </div>
      </div>
    </>
  );
};
