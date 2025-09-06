"use client";

import { useTheme } from "@/components/providers";
export const AppSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-4 w-9 items-center rounded-full transition-colors duration-300 bg-light-400 dark:bg-dark-700`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full  transition-transform duration-300 ${
          isDarkMode ? "translate-x-4 bg-purple" : "translate-x-0 bg-light-800"
        }`}
      />
    </button>
  );
};
