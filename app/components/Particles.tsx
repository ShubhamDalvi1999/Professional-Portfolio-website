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
    const colors = ['#00FFFF', '#FF00FF', '#FFFFFF', '#0088FF'];
    const sizes = [4, 6, 8, 10, 12];
    const durations = [15, 20, 25, 30];
    
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
            opacity: 0.4,
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