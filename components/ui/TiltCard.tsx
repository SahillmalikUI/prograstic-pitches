"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
}

export function TiltCard({ children, className = "", glareColor = "rgba(255, 255, 255, 0.4)" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);

  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
    >
      {children}

      {/* Dynamic Specular Glare Glow */}
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute -inset-full opacity-60 mix-blend-overlay transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor}, transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  );
}
