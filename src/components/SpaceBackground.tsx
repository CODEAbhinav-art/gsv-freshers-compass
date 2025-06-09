
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
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 1 + 0.2,
          opacity: Math.random() * 0.6 + 0.2
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
          x: star.x + Math.sin(star.y * 0.01) * 0.3,
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
      {/* Space Background - More subtle for light theme */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
        {/* Enhanced Black Hole - Visible but subtle */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 black-hole z-10 opacity-30">
          {/* Outer event horizon with subtle glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-transparent via-purple-200/40 to-gray-300/20 shadow-[0_0_100px_20px_rgba(147,51,234,0.1)] animate-spin-slow-bg"></div>
          
          {/* Middle accretion disk */}
          <div className="absolute inset-2 rounded-full bg-gradient-radial from-transparent via-blue-200/30 to-purple-200/40 shadow-[0_0_60px_15px_rgba(59,130,246,0.1)] animate-spin-reverse"></div>
          
          {/* Inner disk with gentle glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-radial from-transparent via-indigo-200/40 to-gray-400/20 shadow-[0_0_40px_10px_rgba(99,102,241,0.1)] animate-spin-slow-bg"></div>
          
          {/* Event horizon - soft center */}
          <div className="absolute inset-8 rounded-full bg-gray-300/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
          
          {/* Gravitational lensing effect - very subtle */}
          <div className="absolute -inset-4 rounded-full border border-purple-200/20 animate-pulse"></div>
          <div className="absolute -inset-6 rounded-full border border-blue-200/10 animate-pulse delay-1000"></div>
        </div>
        
        {/* Subtle Nebula Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-100/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-100/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-purple-100/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        
        {/* Gentle Falling Stars */}
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute rounded-full bg-gray-400 animate-pulse"
            style={{
              left: `${star.x}px`,
              top: `${star.y}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity * 0.6, // Reduce opacity for light theme
              boxShadow: `0 0 ${star.size * 1.5}px rgba(156, 163, 175, ${star.opacity * 0.3})`
            }}
          />
        ))}

        {/* Gentle shooting stars */}
        <div className="shooting-star absolute top-1/4 left-0 w-1 h-1 bg-gray-400 rounded-full opacity-40"></div>
        <div className="shooting-star absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-blue-300 rounded-full opacity-30 delay-3000"></div>
        <div className="shooting-star absolute top-3/4 left-1/2 w-1 h-1 bg-purple-300 rounded-full opacity-35 delay-6000"></div>
      </div>

      {/* Subtle GSV 2025 Hologram */}
      <div className="fixed bottom-10 right-10 -z-40 pointer-events-none opacity-60">
        <div className="relative">
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-blue-500 to-purple-500 animate-pulse hologram-text">
            GSV
          </div>
          <div className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-1 hologram-text">
            2025
          </div>
          {/* Subtle hologram scan lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-300/10 to-transparent animate-scan opacity-30"></div>
        </div>
      </div>
    </>
  );
};
