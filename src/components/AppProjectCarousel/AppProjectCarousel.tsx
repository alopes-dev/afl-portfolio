// @typescript-eslint/no-explicit-any
"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import {
  Button,
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui";
import { useRouter } from "next/navigation";

const SCROLL_SPEED = 4;

export const AppProjectCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const router = useRouter();

  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(6);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) return;

    // Set up event listener for slide changes
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap() + 1);
    });

    // Clear existing intervals when speed changes
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    if (progressInterval.current) clearInterval(progressInterval.current);

    const INTERVAL_MS = SCROLL_SPEED * 1000; // Convert seconds to ms
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

    // Clean up intervals and event listeners on unmount
    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
      if (api) {
        api.off("select", () => {
          setCurrentIndex(api.selectedScrollSnap() + 1);
        });
      }
    };
  }, [api, isPaused]);

  // console.log(currentIndex);

  return (
    <div
      className="container mx-auto  px-4 mt-6 flex flex-col items-center justify-center overflow-hidden"
      id="featured"
    >
      <h4 className="text-[28px] font-bold text-light-950 dark:text-dark-100 z-[1000]">
        Featured Projects
      </h4>
      <Button
        variant="default"
        className="mt-4 z-[1000]"
        onClick={() => router.push("/projects")}
      >
        {"See all my projects"}
      </Button>
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
              <CarouselItem
                key={index}
                className="basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 sm:h-[150px] md:h-[350px] "
              >
                <motion.div
                  className={`p-1 ${
                    currentIndex === index
                      ? "ring-4 ring-purple ring-offset-2 rounded-lg"
                      : ""
                  }`}
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
                    <Card className="">
                      <CardContent className="flex aspect-square items-center justify-center p-6 overflow-hidden">
                        <motion.img
                          src={`/images/brands/malga.svg`}
                          alt={`Project ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
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
                            willChange: "transform",
                          }}
                        />
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
