"use client";

import { MySkills } from "./_shared/MySkills/MySkills";
import { AppAnimation } from "../_shared/AppAnimation/AppAnimation";

export const AppCoreSkill = () => {
  return (
    <AppAnimation id="skill" className="mb-16">
      <div className="flex flex-col items-start mt-16 gap-4 translate-y-4 transition-all duration-700">
        <h4 className="text-[28px] font-bold text-light-950 dark:text-dark-100">
          Core Skills
          <br />
          <span className="text-4xl font-bold  dark:text-purple-light text-purple-dark">
            {" & "}
          </span>
          Tech Stack
        </h4>
        <p className="text-sm font-normal text-start text-light-900 dark:text-dark-300">
          I specialize in building modern web applications with React, Next.js,
          and TypeScript. My core skills include frontend development for web
          and mobile, responsive design, state management, and creating seamless
          user experiences.
        </p>

        <MySkills />
      </div>
    </AppAnimation>
  );
};
