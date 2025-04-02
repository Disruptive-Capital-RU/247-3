"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-6 rounded-xl bg-transparent border border-gray-800/20 hover:border-gray-700/30 backdrop-blur-sm"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative z-10">
            <div className="p-3 max-w-full flex items-center justify-center bg-black rounded-full mb-6 text-silver-100 w-12 h-12 border border-gray-800/50">
              {item.icon || (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-[#EDEDED]">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>

          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-br from-[#0b0b0b]/80 to-[#0b0b0b]/20 rounded-xl opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
