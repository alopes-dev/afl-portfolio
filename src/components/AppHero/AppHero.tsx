"use client";
import { AppAnimation } from "../_shared/AppAnimation/AppAnimation";
import { AppAvatar } from "../_shared/AppAvatar/AppAvatar";
import { Button } from "../ui";

export const AppHero = () => {
  return (
    <AppAnimation id="#home">
      <div className="flex flex-col items-center gap-5 pt-1">
        <AppAvatar className="w-[120px] h-[120px]" size={120} />
        <h1 className="text-2xl leading-[30px] font-light text-light-950 dark:text-dark-100">
          Antonio Lopes
        </h1>

        <div className="flex flex-col items-center mt-16">
          <h3 className="text-4xl font-bold text-light-950 dark:text-dark-100">
            Full Stack Web
            <span className="text-4xl font-bold  dark:text-purple-light text-purple-dark">
              {" & "}
            </span>
          </h3>
          <h3 className="text-4xl font-bold text-light-950 dark:text-dark-100">
            Mobile Engineer
          </h3>
          <p className="text-sm font-normal mt-4 px-8 text-center text-light-900 dark:text-dark-300">
            Building scalable, high-performance applications for web & mobile
          </p>
          <Button variant="default" className="mt-4">
            Let's Connect
          </Button>
        </div>
      </div>
    </AppAnimation>
  );
};
