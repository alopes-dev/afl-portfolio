"use client";

import { useEffect, useState } from "react";

export type SystemTheme = "light" | "dark";

export function useSystemTheme(): SystemTheme {
  const [systemTheme, setSystemTheme] = useState<SystemTheme>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light"; // fallback no SSR
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return systemTheme;
}
