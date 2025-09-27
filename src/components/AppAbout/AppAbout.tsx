"use client";

import { Rankings } from "./_shared/Rankings/Rankings";
import { AppAnimation } from "../_shared/AppAnimation/AppAnimation";
import { useAppContentful } from "@/context/contentful";
import { useMemo } from "react";

export const AppAbout = () => {
  const { about } = useAppContentful();

  const contentHighlights = useMemo(() => {
    if (!about?.highlights) return null;

    return about.highlights.map((highlight) => ({
      name: highlight.fields.name,
      numbers: highlight.fields.numbers,
      isActive: highlight.fields.isActive,
    }));
  }, [about?.highlights]);

  return (
    <AppAnimation id="about">
      <div className="flex flex-col items-center mt-16 gap-4 pt-1  translate-y-4 transition-all duration-700">
        <h4 className="text-[28px] font-bold text-light-950 dark:text-dark-100">
          {about?.title}
        </h4>
        <p className="text-sm font-normal px-8 text-center text-light-900 dark:text-dark-300">
          {about?.description}
        </p>

        {contentHighlights && <Rankings highlights={contentHighlights} />}
      </div>
    </AppAnimation>
  );
};
