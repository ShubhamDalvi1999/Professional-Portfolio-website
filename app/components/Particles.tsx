'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  animationDuration: number;
  animationDelay: number;
}

interface ParticlesProps {
  count?: number;
}

export default function Particles({ count = 20 }: ParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      'rgba(245, 158, 11, 0.5)', // amber-500 with higher opacity
      'rgba(217, 119, 6, 0.5)',  // amber-600 with higher opacity
      'rgba(251, 191, 36, 0.4)', // amber-400 with higher opacity
      'rgba(254, 243, 199, 0.4)', // amber-100 with higher opacity
      'rgba(252, 211, 77, 0.5)',  // amber-300 with higher opacity
    ];
    const sizes = [4, 5, 6, 8, 10];
    const durations = [18, 22, 26, 30];
    
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        animationDuration: durations[Math.floor(Math.random() * durations.length)],
        animationDelay: Math.random() * 5,
      });
    }
    
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            opacity: 0.8,
          }}
          animate={{
            x: [0, 20, -20, 10, -10, 0],
            y: [0, -30, -10, -20, -5, 0],
          }}
          transition={{
            duration: particle.animationDuration,
            ease: "linear",
            repeat: Infinity,
            delay: particle.animationDelay,
          }}
        />
      ))}
    </div>
  );
} 