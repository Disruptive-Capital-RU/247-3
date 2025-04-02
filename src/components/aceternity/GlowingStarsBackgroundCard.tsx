"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlowingStarsBackgroundCard({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const [randomStars, setRandomStars] = useState<
    Array<{ top: string; left: string; size: number; delay: number }>
  >([]);

  useEffect(() => {
    const stars = Array.from({ length: 20 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 2,
    }));
    setRandomStars(stars);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  }

  const Stars = () => {
    return (
      <>
        {randomStars.map((star, idx) => (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-[#EDEDED]"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              boxShadow: `0 0 ${star.size * 2}px rgba(237, 237, 237, 0.5)`,
            }}
          />
        ))}
      </>
    );
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative h-full w-full bg-[#0b0b0b] overflow-hidden border border-gray-800 rounded-xl group",
        className
      )}
    >
      <div
        className="absolute inset-0 z-10 transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(60, 60, 60, 0.1), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 z-0">
        <Stars />
      </div>
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
}
