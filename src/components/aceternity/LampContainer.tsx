"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
  width = "w-full",
  height = "h-full",
}: {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
}) => {
  const lampRef = useRef<HTMLDivElement>(null);
  const [lampCenter, setLampCenter] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!lampRef.current) return;

    const updatePosition = () => {
      if (!lampRef.current) return;
      const { left, top, width, height } =
        lampRef.current.getBoundingClientRect();
      setLampCenter({ x: left + width / 2, y: top + height / 2 });
      setScrollY(window.scrollY);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  const springConfig = { stiffness: 100, damping: 20 };
  const scrollYSpring = useSpring(scrollY, springConfig);

  return (
    <div
      ref={lampRef}
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden",
        width,
        height,
        className
      )}
    >
      <div className="relative z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
        <motion.div
          style={{
            backgroundImage: `radial-gradient(circle at 50% 10%, rgba(237, 237, 237, 0.1) 0%, transparent 60%)`,
          }}
          className="pointer-events-none absolute inset-0 z-10"
        />
        <motion.div
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(237, 237, 237, 0.15) 0%, transparent 60%)`,
          }}
          className="pointer-events-none absolute inset-0 z-20"
        />
      </div>
      <div className="relative z-30 w-full">{children}</div>
    </div>
  );
};
