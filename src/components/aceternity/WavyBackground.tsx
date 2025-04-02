"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function WavyBackground({
  children,
  className,
  backgroundFill = "radial-gradient(circle at 50% 50%, rgba(10, 10, 10, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%)",
  speed = "fast",
  waveWidth = 50,
  waveOpacity = 0.5,
  waveColor = "rgba(237, 237, 237, 0.1)",
}: {
  children: any;
  className?: string;
  backgroundFill?: string;
  speed?: "slow" | "fast";
  waveWidth?: number;
  waveOpacity?: number;
  waveColor?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef<number>(0);
  const mouseY = useRef<number>(0);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    mouseX.current = x;
    mouseY.current = y;
    setCursorX(x);
    setCursorY(y);
  };

  const handleMouseLeave = () => {
    mouseX.current = 0.5;
    mouseY.current = 0.5;
    setCursorX(0.5);
    setCursorY(0.5);
  };

  const springConfig = { stiffness: 150, damping: 15 };
  const offsetX = useTransform(
    useSpring(cursorX, springConfig),
    [0, 1],
    [-20, 20]
  );
  const offsetY = useTransform(
    useSpring(cursorY, springConfig),
    [0, 1],
    [-20, 20]
  );

  const getSpeed = () => {
    if (speed === "slow") return 25;
    return 15;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex h-full w-full overflow-hidden items-center justify-center",
        className
      )}
      style={{
        background: backgroundFill,
      }}
    >
      <svg
        className="absolute h-full w-full"
        viewBox={`0 0 ${windowWidth} ${windowHeight}`}
        style={{
          filter: "blur(40px)",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.path
            key={i}
            d={generateWave(windowWidth, windowHeight, waveWidth, i * 0.1)}
            fill={waveColor}
            style={{
              opacity: waveOpacity / (i + 1),
              x: offsetX,
              y: offsetY,
            }}
            animate={{
              d: generateWave(
                windowWidth,
                windowHeight,
                waveWidth,
                i * 0.1 + 0.1
              ),
            }}
            transition={{
              duration: getSpeed(),
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Function to generate a smooth wave path
function generateWave(
  width: number,
  height: number,
  segmentWidth: number,
  offset = 0
) {
  const cellCount = Math.ceil(width / segmentWidth) + 1;
  const yCenter = height / 2;
  const amplitude = Math.min(height * 0.3, 50);

  let pathData = `M 0 ${yCenter}`;
  for (let i = 0; i < cellCount; i++) {
    const x = i * segmentWidth;
    const y = yCenter + Math.sin(i * 0.5 + offset * Math.PI * 2) * amplitude;
    pathData += ` L ${x} ${y}`;
  }
  pathData += ` L ${width} ${height} L 0 ${height} Z`;

  return pathData;
}
