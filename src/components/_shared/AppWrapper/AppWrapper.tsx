"use client";

import { useEffect } from "react";

export const AppWarpper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const heros = document.querySelectorAll<HTMLElement>(".hero-page");

    heros.forEach((hero) => {
      const gradient = document.createElement("div");
      gradient.classList.add("hero-gradient");
      hero.appendChild(gradient);

      const handleMouseMove = (e: MouseEvent) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gradient.style.opacity = "1";
        gradient.style.background = `
        radial-gradient(
          120px circle at ${x}px ${y}px,
          rgba(142, 136, 241, 0.1),
          transparent 80%
        )
      `;
      };

      hero.addEventListener("mousemove", handleMouseMove);

      hero.addEventListener("mouseleave", () => {
        gradient.style.opacity = "0";
      });
    });
  }, []);
  return (
    <div className="hero-page flex h-full w-full flex-col items-center relative cursor-pointer">
      {children}
    </div>
  );
};
