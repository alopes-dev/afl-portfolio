"use client";

import { Rankings } from "./_shared/Rankings/Rankings";
import { AppAnimation } from "../_shared/AppAnimation/AppAnimation";

export const AppAbout = () => {
  return (
    <AppAnimation id="about">
      <div className="flex flex-col items-center mt-16 gap-4 pt-1  translate-y-4 transition-all duration-700">
        <h4 className="text-[28px] font-bold text-light-950 dark:text-dark-100">
          About me
        </h4>
        <p className="text-sm font-normal px-8 text-center text-light-900 dark:text-dark-300">
          Full Stack Software Engineer with 6+ years of experience building
          scalable and high-performance web and mobile applications. Passionate
          about solving real-world problems through clean, maintainable code and
          cross-functional collaboration.
        </p>

        <Rankings />
      </div>
    </AppAnimation>
  );
};
