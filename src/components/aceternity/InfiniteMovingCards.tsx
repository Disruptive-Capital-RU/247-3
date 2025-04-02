"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  containerClassName,
}: {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getSpeedClass = () => {
    switch (speed) {
      case "fast":
        return "animate-scroll-fast";
      case "normal":
        return "animate-scroll-normal";
      case "slow":
        return "animate-scroll-slow";
      default:
        return "animate-scroll-normal";
    }
  };

  const getDirectionClass = () => {
    if (direction === "left") {
      return "animate-scroll";
    } else {
      return "animate-scroll-reverse";
    }
  };

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scroller = scrollerRef.current;
    const itemsWidth = scroller.offsetWidth;

    if (scroller.children.length === 0) return;

    // Duplicate items for seamless scrolling
    const scrollerContent = Array.from(scroller.children) as HTMLElement[];
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      scroller.appendChild(duplicatedItem);
    });

    setStart(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden relative", containerClassName)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4",
          start ? getSpeedClass() : "",
          start ? getDirectionClass() : "",
          pauseOnHover ? "hover:[animation-play-state:paused]" : "",
          className
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-gray-800/30 backdrop-blur-sm"
            key={idx}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
