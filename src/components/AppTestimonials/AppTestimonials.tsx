"use client";

import { AppAnimation } from "../_shared/AppAnimation/AppAnimation";
import { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { ITestimonial } from "@/types/global";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui";
import { motion } from "framer-motion";

const initialTestimonials: ITestimonial[] = [
  {
    id: 1,
    text: "Antonio delivered our project ahead of schedule with exceptional quality. His attention to detail and communication skills made the entire process smooth and enjoyable.",
    name: "Sarah Johnson",
    role: "Product Manager",
    active: true,
    avatarSrc: "/images/anime-avatar.png",
  },
  {
    id: 2,
    imageSrc: "/images/demo/softo-team-mate.png",
    imageAlt: "Project screenshot for Michael Chen",
    name: "Fabio Seixas",
    role: "CEO & Founder - SOFTO",
    avatarSrc: "/images/anime-avatar.png",
  },
  {
    id: 3,
    text: "I've worked with many developers, but Antonio stands out for his technical expertise and problem-solving abilities. He's now our go-to developer for all web projects.",
    name: "Emily Rodriguez",
    role: "Design Director",
    active: true,
    avatarSrc: "/images/anime-avatar.png",
  },
  {
    id: 4,
    imageSrc: "/images/demo/softo-team-mate.png",
    imageAlt: "Project screenshot for David Kim",
    name: "David Kim",
    role: "Marketing Lead",
    avatarSrc: "/images/anime-avatar.png",
  },
  {
    id: 5,
    text: "Exceptional developer who truly understands both the technical and business aspects of web development. Antonio delivered exactly what we needed.",
    name: "Lisa Patel",
    role: "Project Manager",
    avatarSrc: "/images/anime-avatar.png",
  },
  {
    id: 6,
    text: "Antonio's expertise in React and Next.js helped us modernize our outdated platform. The result was a faster, more user-friendly experience that our customers love.",
    name: "James Wilson",
    role: "CTO",
    active: true,
    avatarSrc: "/images/anime-avatar.png",
  },
];
const SCROLL_SPEED = 4; // seconds per slide

export const AppTestimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set up auto-scrolling
  useEffect(() => {
    if (!api) return;

    // Function to scroll to next slide
    const scrollToNextSlide = () => {
      if (isPaused) return;

      api.scrollNext();
    };

    // Clear any existing timer
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }

    // Set up new timer for auto-scrolling
    autoScrollTimerRef.current = setInterval(
      scrollToNextSlide,
      SCROLL_SPEED * 1000
    );

    // Clean up on unmount
    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [api, isPaused]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Get initial index
    setCurrentIndex(api.selectedScrollSnap());

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonials((prev) =>
        prev.map((testimonial) => ({
          ...testimonial,
          active: !testimonial.active,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AppAnimation id="testimonials" className="mb-16 container">
      <div className="flex flex-col items-center mt-16 gap-4 translate-y-4 transition-all duration-700">
        <h4 className="text-[28px] font-bold text-light-950 dark:text-dark-100">
          Testimonials
        </h4>
        <p className="text-sm font-normal px-8 text-center text-light-900 dark:text-dark-300 max-w-2xl mb-6">
          What clients and colleagues say about working with me
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full gap-6"
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
              containScroll: "trimSnaps",
              dragFree: false,
              skipSnaps: false,
            }}
            setApi={setApi}
            className="w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
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
              <CarouselContent className="cursor-grab active:cursor-grabbing pt-4 flex flex-row gap-5 md:gap-0">
                {testimonials?.map((testimonial: ITestimonial) => (
                  <CarouselItem
                    key={testimonial.id}
                    className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 sm:h-[150px] md:h-[350px]"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </motion.div>
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-purple-dark dark:bg-purple-light"
                      : "bg-light-300 dark:bg-dark-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </motion.div>
      </div>
    </AppAnimation>
  );
};
