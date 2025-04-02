"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export type SparkleType = {
  id: string;
  createdAt: number;
  size: number;
  color: string;
  style: React.CSSProperties;
};

export function SparklesCore({
  id,
  className,
  background,
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = "#FFFFFF",
  particleDensity = 100,
  particleCount = 25,
  style,
  children,
}: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
  particleCount?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  const [sparkles, setSparkles] = useState<SparkleType[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const noise = useRef<() => void>();
  const animationRef = useRef<number | null>(null);

  const generateSparkle = (px?: number, py?: number): SparkleType => {
    return {
      id: Math.random().toString(36).slice(2),
      createdAt: Date.now(),
      size: minSize + Math.random() * (maxSize - minSize),
      color: particleColor,
      style: {
        position: "absolute",
        left: px !== undefined ? px : Math.random() * 100 + "%",
        top: py !== undefined ? py : Math.random() * 100 + "%",
        zIndex: Math.random() > 0.5 ? 1 : -1,
        opacity: 0,
        transform: "scale(0)",
      },
    };
  };

  useEffect(() => {
    if (!noise.current) {
      noise.current = createNoise3D();
    }

    const updateSparkles = () => {
      const now = Date.now();
      const newSparkles = [...sparkles];

      for (let i = 0; i < newSparkles.length; i++) {
        const sparkle = newSparkles[i];
        const dead = now - sparkle.createdAt > 500;

        if (dead) {
          newSparkles[i] = generateSparkle();
        }
      }

      setSparkles(newSparkles);
    };

    const tick = () => {
      animationRef.current = requestAnimationFrame(tick);
      updateSparkles();
    };

    if (sparkles.length === 0) {
      setSparkles(
        Array.from({ length: particleCount }, () => generateSparkle())
      );
    }

    tick();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [sparkles, particleCount, maxSize, minSize, particleColor]);

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-full relative overflow-hidden", className)}
      style={{
        background,
        ...style,
      }}
    >
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle-enter-exit pointer-events-none"
          style={{
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            ...sparkle.style,
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <circle cx="8" cy="8" r="3" fill={sparkle.color} />
          </svg>
        </div>
      ))}
      {children}
    </div>
  );
}
