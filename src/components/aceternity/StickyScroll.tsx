"use client";
import React, { useRef, useState, useEffect } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickyScrollProps {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
    image?: string;
  }[];
  contentClassName?: string;
}

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = Math.round(latest * (cardLength - 1));
    setActiveCard(progress);
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const backgroundColors = [
    "radial-gradient(circle at top left, rgba(30, 30, 30, 0.5), transparent 70%)",
    "radial-gradient(circle at top right, rgba(30, 30, 30, 0.5), transparent 70%)",
    "radial-gradient(circle at bottom left, rgba(30, 30, 30, 0.5), transparent 70%)",
    "radial-gradient(circle at bottom right, rgba(30, 30, 30, 0.5), transparent 70%)",
  ];

  return (
    <motion.div
      className="h-[30rem] md:h-[40rem] overflow-y-auto flex justify-center relative w-full rounded-lg"
      ref={ref}
    >
      <div className="w-full max-w-6xl">
        <div className="relative py-16 md:py-40">
          <div className="flex flex-col gap-16">
            {content.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div
                  className={cn(
                    "w-full md:w-1/2 h-[20rem] md:h-[25rem] rounded-lg flex items-center justify-center p-8",
                    activeCard === index ? "opacity-100" : "opacity-40",
                    contentClassName
                  )}
                >
                  <div className="flex flex-col relative rounded-lg h-full w-full overflow-hidden border border-gray-800/30">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 object-cover w-full h-full z-0 opacity-40"
                      />
                    )}
                    <div
                      className="absolute inset-0 z-10"
                      style={{
                        background:
                          backgroundColors[index % backgroundColors.length],
                      }}
                    />
                    {item.content || (
                      <div className="relative z-20 w-full h-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-[#EDEDED]">
                          {item.title}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className={cn(
                    "w-full md:w-1/2",
                    activeCard === index ? "opacity-100" : "opacity-60"
                  )}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.5,
                      y: activeCard === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#0b0b0b]/30 backdrop-blur-sm border border-gray-800/30 p-8 rounded-lg"
                  >
                    <h2 className="text-2xl md:text-3xl font-serif font-light mb-4 text-[#EDEDED]">
                      {item.title}
                    </h2>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
