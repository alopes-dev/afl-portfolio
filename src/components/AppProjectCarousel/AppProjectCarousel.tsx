"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui";

export const AppProjectCarousel = () => {
  const [api, setApi] = useState<any>();

  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(3); // 3 seconds default
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) return;

    // Clear existing intervals when speed changes
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    if (progressInterval.current) clearInterval(progressInterval.current);

    const INTERVAL_MS = scrollSpeed * 1000; // Convert seconds to ms
    const PROGRESS_UPDATE_MS = 30; // Update progress every 30ms
    const STEPS = INTERVAL_MS / PROGRESS_UPDATE_MS;

    let currentStep = 0;

    // Auto-scroll interval
    autoScrollInterval.current = setInterval(() => {
      if (!isPaused) {
        api.scrollNext();
        setProgress(0);
        currentStep = 0;
      }
    }, INTERVAL_MS);

    // Progress bar update interval
    progressInterval.current = setInterval(() => {
      if (!isPaused) {
        currentStep++;
        setProgress(Math.min((currentStep / STEPS) * 100, 100));
      }
    }, PROGRESS_UPDATE_MS);

    // Clean up intervals on unmount
    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [api, isPaused, scrollSpeed]);

  return (
    <div className="container mx-auto  px-4 mt-6 flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
            loop: true,
            inViewThreshold: 0.5,
            skipSnaps: true,
            active: true,
            startIndex: 5,
          }}
          setApi={setApi}
          className="w-full CarouselContent"
        >
          <CarouselContent
            className="cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/12 lg:basis-1/5">
                <motion.div
                  className="p-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                >
                  <motion.div
                    whileHover={{
                      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
                      y: -5,
                      scale: 1.02,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      mass: 0.8,
                      damping: 15,
                    }}
                    style={{
                      filter: "blur(0px)",
                      willChange: "transform",
                    }}
                  >
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6 overflow-hidden">
                        <motion.span
                          className="text-3xl font-semibold"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + index * 0.05,
                            type: "spring",
                            stiffness: 120,
                            damping: 10,
                          }}
                          style={{
                            display: "inline-block",
                            willChange: "transform",
                          }}
                        >
                          {index + 1}
                        </motion.span>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
      <div className="w-2/5 bg-gray-200 rounded-full h-1.5 mt-2 z-[1000]">
        <motion.div
          className="bg-purple h-1.5 rounded-full"
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
};
