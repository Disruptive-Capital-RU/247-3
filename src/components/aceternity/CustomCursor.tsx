"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setCursorVariant("click");
    const mouseUp = () => setCursorVariant("default");
    const mouseEnterLink = () => setCursorVariant("hover");
    const mouseLeaveLink = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    // Add hover state to all links and buttons
    const links = document.querySelectorAll("a, button, .hover-target");
    links.forEach((link) => {
      link.addEventListener("mouseenter", mouseEnterLink);
      link.addEventListener("mouseleave", mouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);

      links.forEach((link) => {
        link.removeEventListener("mouseenter", mouseEnterLink);
        link.removeEventListener("mouseleave", mouseLeaveLink);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(237, 237, 237, 0.5)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(237, 237, 237, 0.5)",
      border: "1px solid rgba(237, 237, 237, 0.8)",
      mixBlendMode: "difference" as const,
    },
    click: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "rgba(237, 237, 237, 0.8)",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  );
};
