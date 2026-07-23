import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CardHoverProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function CardHover({ children, className = '', glowColor = 'rgba(0, 229, 255, 0.5)' }: CardHoverProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateYVal = ((mouseX / width) - 0.5) * 20; // max 10 deg
    const rotateXVal = ((mouseY / height) - 0.5) * -20; // max 10 deg

    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        transformStyle: 'preserve-3d',
        boxShadow: isHovered ? `0 20px 40px ${glowColor}` : '0 10px 30px rgba(0,0,0,0.5)',
      }}
      className={`relative rounded-xl bg-card border border-border/50 overflow-hidden cursor-pointer transition-shadow duration-300 ${className}`}
    >
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)`,
          opacity: isHovered ? 0.15 : 0
        }}
      />
      {children}
    </motion.div>
  );
}