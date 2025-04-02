"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlobeDemo({ className }: { className?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const globeRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<HTMLDivElement[]>([]);
  const lineRefs = useRef<HTMLDivElement[]>([]);
  const [dotPositions, setDotPositions] = useState<
    Array<{ x: number; y: number; z: number }>
  >([]);
  const [connections, setConnections] = useState<Array<[number, number]>>([]);

  useEffect(() => {
    // Generate random dots on the globe
    const numDots = 20;
    const dots = [];
    for (let i = 0; i < numDots; i++) {
      // Generate points on a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);
      dots.push({ x, y, z });
    }
    setDotPositions(dots);

    // Generate random connections between dots
    const numConnections = 15;
    const conns = [];
    for (let i = 0; i < numConnections; i++) {
      const from = Math.floor(Math.random() * numDots);
      let to = Math.floor(Math.random() * numDots);
      while (to === from) {
        to = Math.floor(Math.random() * numDots);
      }
      conns.push([from, to] as [number, number]);
    }
    setConnections(conns);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!globeRef.current) return;
      const rect = globeRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={globeRef}
      className={cn(
        "relative w-full h-full overflow-hidden rounded-lg bg-[#0b0b0b]",
        className
      )}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          animate={{
            rotateX: mousePosition.y * 20,
            rotateY: mousePosition.x * 20,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="relative w-[300px] h-[300px] rounded-full bg-transparent border border-gray-800/20"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Dots */}
          {dotPositions.map((pos, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                if (el) dotRefs.current[index] = el;
              }}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#EDEDED]"
              style={{
                transformStyle: "preserve-3d",
                transform: `translate(-50%, -50%) translate3d(${
                  pos.x * 150
                }px, ${pos.y * 150}px, ${pos.z * 150}px)`,
                opacity: ((pos.z + 1) / 2) * 0.8 + 0.2, // Fade based on z-position
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: ((pos.z + 1) / 2) * 0.8 + 0.2, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            />
          ))}

          {/* Connection lines */}
          {connections.map(([fromIdx, toIdx], index) => {
            const from = dotPositions[fromIdx];
            const to = dotPositions[toIdx];

            // Calculate midpoint for curved line
            const midX = (from.x + to.x) / 2;
            const midY = (from.y + to.y) / 2;
            const midZ = (from.z + to.z) / 2 + 0.2; // Bulge slightly outward

            // Calculate distance for line opacity
            const distance = Math.sqrt(
              Math.pow(to.x - from.x, 2) +
                Math.pow(to.y - from.y, 2) +
                Math.pow(to.z - from.z, 2)
            );

            const opacity = Math.max(0.1, 1 - distance / 2);

            return (
              <motion.div
                key={`line-${index}`}
                ref={(el) => {
                  if (el) lineRefs.current[index] = el;
                }}
                className="absolute top-1/2 left-1/2 w-px h-px bg-transparent"
                style={{
                  transformStyle: "preserve-3d",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity }}
                transition={{ delay: index * 0.05 + 0.5, duration: 0.5 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    transformStyle: "preserve-3d",
                    background: `linear-gradient(rgba(237, 237, 237, ${
                      opacity * 0.3
                    }), rgba(237, 237, 237, ${
                      opacity * 0.1
                    }), rgba(237, 237, 237, ${opacity * 0.3}))`,
                    height: `${distance * 150}px`,
                    width: "1px",
                    transformOrigin: "top",
                    transform: `rotateX(${
                      Math.atan2(
                        to.y - from.y,
                        Math.sqrt(
                          Math.pow(to.x - from.x, 2) +
                            Math.pow(to.z - from.z, 2)
                        )
                      ) *
                      (180 / Math.PI)
                    }deg) rotateY(${
                      Math.atan2(to.x - from.x, to.z - from.z) * (180 / Math.PI)
                    }deg) translateY(${distance * 75}px)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
