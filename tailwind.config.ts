const config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        dark: {
          100: "#FFFFFF", // Lightest
          200: "#E5E5E5",
          300: "#CCCCCC",
          400: "#B3B3B3",
          500: "#999999",
          600: "#808080",
          700: "#666666",
          800: "#4D4D4D",
          900: "#333333",
          950: "#000000", // Darkest
        },
        light: {
          100: "#FFFFFF", // Lightest
          200: "#F2F2F2",
          300: "#E6E6E6",
          400: "#D9D9D9",
          500: "#BFBFBF",
          600: "#A6A6A6",
          700: "#808080",
          800: "#666666",
          900: "#404040",
          950: "#000000", // Darkest
        },
        purple: {
          DEFAULT: "#5D40C2", // Primary color
          light: "#7B61D8", // Lighter variation
          dark: "#4730A8", // Darker variation
        },
      },
    },
  },
};

export default config;
