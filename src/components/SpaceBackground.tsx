
import { useEffect, useState } from 'react';

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
        {/* Nebula Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-900/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        
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
