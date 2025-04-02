"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export function MovingBorderButton({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 2500,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative text-xl h-fit w-fit transition-all",
        containerClassName
      )}
      {...otherProps}
    >
      <div
        className={cn(
          "absolute inset-0",
          "overflow-hidden",
          "rounded-[calc(1.75rem-1px)]",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} - 1px)`,
        }}
      >
        <motion.div
          className={cn(
            "absolute inset-0 z-[-1]",
            borderClassName ?? "bg-[rgba(237,237,237,0.2)]"
          )}
          style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, rgba(237, 237, 237, 0.5) 0%, rgba(171, 171, 171, 0.3) 10%, rgba(201, 201, 201, 0.5) 20%, rgba(237, 237, 237, 0.3) 30%, rgba(171, 171, 171, 0.5) 40%, rgba(237, 237, 237, 0.3) 50%, rgba(201, 201, 201, 0.5) 60%, rgba(171, 171, 171, 0.3) 70%, rgba(237, 237, 237, 0.5) 80%, rgba(201, 201, 201, 0.3) 90%, rgba(237, 237, 237, 0.5) 100%)`,
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration,
            ease: "linear",
          }}
        />
      </div>
      <div
        className={cn(
          "relative z-10 px-6 py-3 backdrop-blur-sm rounded-[1.75rem]",
          className
        )}
        style={{
          borderRadius,
        }}
      >
        {children}
      </div>
    </Component>
  );
}
