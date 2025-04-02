"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BackgroundBeams({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const backgroundBeamsRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handlePointerMove = (event: PointerEvent) => {
      if (!backgroundBeamsRef.current) return;

      const { clientX, clientY } = event;
      const { width, height, top, left } =
        backgroundBeamsRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      setCursorPosition({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  const beams = 20;
  const beamElements = [];

  for (let i = 0; i < beams; i++) {
    beamElements.push(
      <motion.div
        key={i}
        className="opacity-[0.15] absolute top-0 left-0 h-[40%] w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"
        style={{
          left: `${(i / beams) * 100}%`,
          transform: "translateX(-50%)",
        }}
        animate={
          isMounted
            ? {
                x: [
                  `calc(${(cursorPosition.x - 0.5) * 100 * 2}% - ${i * 5}px)`,
                  `calc(${(cursorPosition.x - 0.5) * 100 * 2}% + ${i * 5}px)`,
                ],
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }
            : {}
        }
        transition={{
          duration: 2 + i * 0.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    );
  }

  return (
    <div
      ref={backgroundBeamsRef}
      className={cn("h-full w-full overflow-hidden relative z-0", className)}
    >
      {beamElements}
      {children}
    </div>
  );
}
