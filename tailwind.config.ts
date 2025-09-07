const config = {
  darkMode: "class",
  safelist: ["blur-3xl"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        mediumDropShadow: `
          0px 1px 3px rgba(0,0,0,0.3),
          0px 4px 8px 3px rgba(0,0,0,0.15)
        `,
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        dark: {
          background: "#121212",
          sidebar: "#211D3F",
          100: "#F4F4F4", // Lightest
          200: "#DCDCDC",
          300: "#BFBFBF",
          400: "#9B9B9B",
          500: "#7A7A7A",
          600: "#525252",
          700: "#373737",
          800: "#262626",
          900: "#121212",
          950: "#000000", // Darkest
        },
        light: {
          background: "#F9F9F9",
          sidebar: "#E5E5E5",
          100: "#FFFFFF", // Lightest
          200: "#F4F4F4",
          300: "#E5E5E5",
          400: "#DCDCDC",
          500: "#BFBFBF",
          600: "#9B9B9B",
          700: "#7A7A7A",
          800: "#5A5A5A",
          900: "#3C3C3C",
          950: "#121212", // Darkest
        },
        purple: {
          DEFAULT: "#6E5DE7", // Primary color
          light: "#8E88F1", // Lighter variation
          dark: "#5D40C2", // Darker variation
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-out forwards",
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void;
    }) {
      addUtilities({
        ".backface-hidden": {
          "backface-visibility": "hidden",
          "-webkit-backface-visibility": "hidden",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      });
    },
  ],
};

export default config;
