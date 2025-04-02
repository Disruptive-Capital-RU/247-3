"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "./SparklesCore";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 1, 100));
      } else {
        onComplete();
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B0B0B]"
      initial={{ opacity: 1 }}
      animate={{
        opacity: progress === 100 ? 0 : 1,
        pointerEvents: progress === 100 ? "none" : "auto",
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-full h-full">
        <SparklesCore
          id="loadingSparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleColor="#EDEDED"
          className="w-full h-full"
          particleCount={20}
        />
      </div>

      <div className="absolute flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-[#EDEDED] text-4xl font-serif">
            <span className="font-light">Moscow</span>
            <span className="text-silver-100">Luxury</span>
          </h1>
        </motion.div>

        <div className="w-64 h-[1px] bg-gray-800 mb-6 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-silver-100"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-sm font-light"
        >
          Preparing your luxury experience...
        </motion.p>
      </div>
    </motion.div>
  );
};
